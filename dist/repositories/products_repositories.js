"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRepositories = void 0;
const products = [
    { id: 1, title: "tomato" },
    { id: 2, title: "orange" },
];
exports.productsRepositories = {
    findProducts(title) {
        if (title) {
            let filteredProducts = products.filter(function (p) {
                return p.title.indexOf(title) > -1;
            });
            return filteredProducts;
        }
        else {
            return products;
        }
    },
    findProductById(id) {
        const product = products.find((p) => p.id === id);
        return product;
    },
    createProduct(title) {
        const newProduct = {
            id: Number(new Date()),
            title: title,
        };
        products.push(newProduct);
        return newProduct;
    },
    updateProduct(id, title) {
        let product = products.find(function (p) {
            return p.id === id;
        });
        if (product) {
            product.title = title;
            return true;
        }
        else {
            return false;
        }
    },
    deleteProduct(id) {
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                products.splice(i, 1);
                return true;
            }
        }
        return false;
    },
};
