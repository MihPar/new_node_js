"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRouter = void 0;
const express_1 = require("express");
const products_db_repositories_1 = require("../repositories/products_db_repositories");
const input_validation_middleware_1 = require("../middlewares/input_validation_middleware");
const input_validation_middleware_2 = require("../middlewares/input_validation_middleware");
exports.productsRouter = (0, express_1.Router)({});
exports.productsRouter.get("/", function (req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const foundProducts = yield products_db_repositories_1.productsRepositories.findProducts((_a = req.query.title) === null || _a === void 0 ? void 0 : _a.toString());
        res.json(foundProducts);
    });
});
exports.productsRouter.post("/", input_validation_middleware_2.titleValidation, input_validation_middleware_1.inputValidationMiddleWare, function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newProduct = yield products_db_repositories_1.productsRepositories.createProduct(req.body.title);
        res.status(201).json(newProduct);
    });
});
exports.productsRouter.get("/:id", function (req, res) {
    let product = products_db_repositories_1.productsRepositories.findProductById(Number(req.params.id));
    if (product) {
        res.json(product);
    }
    else {
        res.send(404);
    }
});
exports.productsRouter.put("/:id", input_validation_middleware_2.titleValidation, input_validation_middleware_1.inputValidationMiddleWare, function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let isUpdated = yield products_db_repositories_1.productsRepositories.updateProduct(Number(req.params.id), req.body.title);
        if (isUpdated) {
            const product = yield products_db_repositories_1.productsRepositories.findProductById(+req.params.id);
            res.send(product);
        }
        else {
            res.send(404);
        }
    });
});
exports.productsRouter.delete("/:id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let isDeleted = yield products_db_repositories_1.productsRepositories.deleteProduct(Number(req.params.id));
        if (isDeleted) {
            res.send(204);
        }
        else {
            res.send(404);
        }
    });
});
