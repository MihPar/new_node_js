const products = [
	{ id: 1, title: "tomato" },
	{ id: 2, title: "orange" },
  ];

 export type ProductType = {
	id: number
	title: string
  }
  
  export const productsRepositories = {
	async findProducts(title: string | null | undefined): Promise<ProductType[]> {
	  if (title) {
		let filteredProducts = products.filter(function (p) {
		  return p.title.indexOf(title) > -1;
		});
		return filteredProducts;
	  } else {
		return products;
	  }
	},
	async findProductById(id: number): Promise<ProductType | null> {
	  const product = products.find((p) => p.id === id);
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
	  products.push(newProduct);
	  return newProduct;
	},
	async updateProduct(id: number, title: string): Promise<boolean> {
	  let product = products.find(function (p) {
		return p.id === id;
	  });
	  if (product) {
		product.title = title;
		return true;
	  } else {
		return false;
	  }
	},
	async deleteProduct(id: number): Promise<boolean> {
	  for (let i = 0; i < products.length; i++) {
		if (products[i].id === id) {
		  products.splice(i, 1);
		  return true;
		}
	  }
	  return false;
	},
  }
  