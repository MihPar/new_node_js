import {MongoClient} from 'mongodb'

const mongoURI = process.env.mongoURI || 'mongoDb://0.0.0.0.27017/?maxPoolSize=206w=majority'

export const client = new MongoClient(mongoURI)

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