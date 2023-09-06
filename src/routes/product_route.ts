import {Request, Response, Router} from 'express'
import { productsRepositories } from '../repositories/addresses_repositories'
export const productsRouter = Router({})


productsRouter.get('/', function(req: Request, res: Response) {
	const foundProducts = productsRepositories.findProducts(req.query.title?.toString())
    res.json(foundProducts)
})

productsRouter.post('/', function(req: Request, res: Response) {
	const newProduct = productsRepositories.createProduct(req.body.title)
	res.status(201).json(newProduct)
})

productsRouter.get('/:id', function(req: Request, res: Response) {
	let product = productsRepositories.findProductById(Number(req.params.id))
    if(product) {
        res.json(product)
    } else {
        res.send(404)
    }
})

productsRouter.put('/:id', function(req: Request, res: Response) {
	let isUpdated = productsRepositories.updateProduct(Number(req.params.id), req.body.title)
	if(isUpdated) {
		const product = productsRepositories.findProductById(+req.params.id)
		res.send(product)
	} else {
		res.send(404)
	}
})

productsRouter.delete('/:id', function(req: Request, res: Response) {
    let isDeleted = productsRepositories.deleteProduct(Number(req.params.id))
	if(isDeleted) {
		res.send(204)
	} else {
		res.send(404)
	}
})
