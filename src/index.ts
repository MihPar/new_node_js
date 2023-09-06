import express from 'express'
import bodyParser from 'express'
import { productsRouter } from './routes/product_route'
import { addressesRouter } from './routes/address_route'

const app = express()

const port = process.env.PORT || 4000

const parseMiddleWare = bodyParser()
app.use(parseMiddleWare)

app.use('/product', productsRouter)
app.use('/addresses', addressesRouter)

app.listen(port, function() {
    console.log(`Server was started at port http://localhost:${port}`)
})
