import { productsCollection, ProductType} from "./db";

const products = [
	{ id: 1, title: "tomato" },
	{ id: 2, title: "orange" },
  ];

 
  
  export const productsRepositories = {
	async findProducts(title: string | null | undefined): Promise<ProductType[]> {
		const filter: any = {}
	  if (title) {
		filter.title = {$regex: title}
	  } 
	  return productsCollection.find(filter).toArray()
	},
	async findProductById(id: number): Promise<ProductType | null> {
		const product: ProductType | null = await productsCollection.findOne({id: id})
		if(product) {
		  return product;
		} else {
		  return null
		}
	  },
	  async createProduct(title: string): Promise<ProductType> {
		const newProduct = {
		  id: Number(new Date()),
		  title,
		};
		const result = await productsCollection.insertOne(newProduct)
		return newProduct;
	  },
	  async updateProduct(id: number, title: string): Promise<boolean> {
		const result = await productsCollection.updateOne({id: id}, {$set: {title: title}})
		return result.upsertedCount === 1
	  },
	  async deleteProduct(id: number): Promise<boolean> {
		const result = await productsCollection.deleteOne({id: id})
		return result.deletedCount === 1
	}
}