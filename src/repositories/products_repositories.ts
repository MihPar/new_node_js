const products = [
	{ id: 1, title: "tomato" },
	{ id: 2, title: "orange" },
  ];
  
  export const productsRepositories = {
	findProducts(title: string | null | undefined) {
	  if (title) {
		let filteredProducts = products.filter(function (p) {
		  return p.title.indexOf(title) > -1;
		});
		return filteredProducts;
	  } else {
		return products;
	  }
	},
	findProductById(id: number) {
	  const product = products.find((p) => p.id === id);
	  return product;
	},
	createProduct(title: string) {
	  const newProduct = {
		id: Number(new Date()),
		title: title,
	  };
	  products.push(newProduct);
	  return newProduct;
	},
	updateProduct(id: number, title: string) {
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
	deleteProduct(id: number) {
	  for (let i = 0; i < products.length; i++) {
		if (products[i].id === id) {
		  products.splice(i, 1);
		  return true;
		}
	  }
	  return false;
	},
  }
  