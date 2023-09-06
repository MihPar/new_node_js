"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRouter = void 0;
const express_1 = require("express");
const products_repositories_1 = require("../repositories/products_repositories");
exports.productsRouter = (0, express_1.Router)({});
exports.productsRouter.get('/', function (req, res) {
    var _a;
    const foundProducts = products_repositories_1.productsRepositories.findProducts((_a = req.query.title) === null || _a === void 0 ? void 0 : _a.toString());
    res.json(foundProducts);
});
exports.productsRouter.post('/', function (req, res) {
    const newProduct = products_repositories_1.productsRepositories.createProduct(req.body.title);
    res.status(201).json(newProduct);
});
exports.productsRouter.get('/:id', function (req, res) {
    let product = products_repositories_1.productsRepositories.findProductById(Number(req.params.id));
    if (product) {
        res.json(product);
    }
    else {
        res.send(404);
    }
});
exports.productsRouter.put('/:id', function (req, res) {
    let isUpdated = products_repositories_1.productsRepositories.updateProduct(Number(req.params.id), req.body.title);
    if (isUpdated) {
        const product = products_repositories_1.productsRepositories.findProductById(+req.params.id);
        res.send(product);
    }
    else {
        res.send(404);
    }
});
exports.productsRouter.delete('/:id', function (req, res) {
    let isDeleted = products_repositories_1.productsRepositories.deleteProduct(Number(req.params.id));
    if (isDeleted) {
        res.send(204);
    }
    else {
        res.send(404);
    }
});
