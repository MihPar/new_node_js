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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_route_1 = require("./routes/product_route");
const address_route_1 = require("./routes/address_route");
const db_1 = require("./repositories/db");
const app = (0, express_1.default)();
const port = process.env.PORT || 4000;
app.use(express_1.default.json());
// let blaBlaMiddleWare = (req: Request, res: Response, next: NextFunction) => {
// 	// @ts-ignore
// 	req.blabla = 'Hello'
// 	next()
// }
// let authGuardeMiddleWare = (req: Request, res: Response, next: NextFunction) => {
// 	if(req.query.token === '123') {
// 		next()
// 	} else {
// 		res.json(401)
// 	}
// }
// let requestCounter = 0
// let requestCounterMiddleWare = (req: Request, res: Response, next: NextFunction) => {
// 	requestCounter++
// 	next()
// }
app.use('/product', product_route_1.productsRouter);
app.use('/addresses', address_route_1.addressesRouter);
// app.use(requestCounterMiddleWare)
// app.use(blaBlaMiddleWare)
// app.use(authGuardeMiddleWare)
// app.get('/products', function(req: Request, res: Response) {
// 	//@ts-ignore
// 	const blabla = req.blabla
// 	res.send({value: blabla + '!!!!' + requestCounter})
// })
// app.get('/users', function(req: Request, res: Response) {
// 	//@ts-ignore
// 	const blabla = req.blabla
// 	res.send({value: blabla + ' from user' + requestCounter})
// })
const startApp = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, db_1.runDb)();
    app.listen(port, function () {
        console.log(`Server was started at port http://localhost:${port}`);
    });
});
startApp();
