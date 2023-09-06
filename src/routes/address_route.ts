import {Request, Response, Router} from 'express'
export const addressesRouter = Router({})

const addresseses = [{id: 1, value: 'Novay, 12'}, {id: 2, value: 'Staray 13'}]

addressesRouter.get('/', (req: Request, res: Response) => {
	res.send(addresseses)
})

addressesRouter.get('/:id', function(req: Request, res: Response) {
    // let result
    // for(let item of addresses) {
    //     if(item.id === Number(req.params.id)) {
    //         result = item.value
    //     }
    // }
    // res.json(result)

    let address = addresseses.find(function(address) {
        return address.id === Number(req.params.id)
    })
    if(address) {
        res.json(address)
    } else {
        res.status(404).json('Not found')
    }
})
