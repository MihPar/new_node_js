import express from 'express'
// import {NextFunction, Request, Response} from 'express'
import bodyParser from 'express'
import { productsRouter } from './routes/product_route'
import { addressesRouter } from './routes/address_route'
import {runDb} from './repositories/db'


const app = express()

const port = process.env.PORT || 4000

app.use(express.json())

// let blaBlaMiddleWare = (req: Request, res: Response, next: NextFunction) => {
// 	// @ts-ignore
// 	req.blabla = 'Hello'
// 	next()
// }

// let authGuardeMiddleWare = (req: Request, res: Response, next: NextFunction) => {
// 	if(req.query.token === '123') {
// 		next()
// 	} else {
// 		res.json(401)
// 	}
// }

// let requestCounter = 0
// let requestCounterMiddleWare = (req: Request, res: Response, next: NextFunction) => {
// 	requestCounter++
// 	next()
// }

app.use('/product', productsRouter)
app.use('/addresses', addressesRouter)

// app.use(requestCounterMiddleWare)
// app.use(blaBlaMiddleWare)
// app.use(authGuardeMiddleWare)

// app.get('/products', function(req: Request, res: Response) {
// 	//@ts-ignore
// 	const blabla = req.blabla
// 	res.send({value: blabla + '!!!!' + requestCounter})
// })

// app.get('/users', function(req: Request, res: Response) {
// 	//@ts-ignore
// 	const blabla = req.blabla
// 	res.send({value: blabla + ' from user' + requestCounter})
// })

const startApp = async () => {
	await runDb()
	app.listen(port, function() {
		console.log(`Server was started at port http://localhost:${port}`)
	})
}

startApp()

