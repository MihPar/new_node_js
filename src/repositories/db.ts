import {MongoClient} from 'mongodb'

export type ProductType = {
	id: number
	title: string
  }

const mongoURI = process.env.mongoURI || 'mongoDb://0.0.0.0.27017'

export const client = new MongoClient(mongoURI)
const db = client.db('shop')
export const productsCollection = db.collection<ProductType>('products')

export async function runDb() {
	try {
		await client.connect()
		await client.db('products').command({ping: 1})
		console.log('Connect successfully to mongo server')
	} catch {
		console.log('Cann`t to connect to db')
		await client.close()
	}
}