import { ProductType, productsCollection } from "./../repositories/db";
import { productsRepositories } from "./../repositories/products_db_repositories";

export const productsService = {
  async findProducts(title: string | null | undefined): Promise<ProductType[]> {
    return productsRepositories.findProducts(title);
  },
  async findProductById(id: number): Promise<ProductType | null> {
    return productsRepositories.findProductById(id);
  },
  async createProduct(title: string): Promise<ProductType> {
    const newProduct = {
      id: Number(new Date()),
      title,
    };
    const createProduct = await productsRepositories.createProduct(newProduct);
    return createProduct;
  },
  async updateProduct(id: number, title: string): Promise<boolean> {
    return await productsRepositories.updateProduct(id, title);
  },
  async deleteProduct(id: number): Promise<boolean> {
    return await productsRepositories.deleteProduct(id);
  },
};
