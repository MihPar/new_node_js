import { productsService } from './../domain/products_service';
import { ProductType } from "../repositories/products_in_memory_repositories";
import { Request, Response, Router } from "express";
import { inputValidationMiddleWare } from "../middlewares/input_validation_middleware";
import { titleValidation } from "../middlewares/input_validation_middleware";

export const productsRouter = Router({});

productsRouter.get("/", async function (req: Request, res: Response) {
  const foundProducts: ProductType[] = await productsService.findProducts(
    req.query.title?.toString()
  );
  res.json(foundProducts);
});

productsRouter.post(
  "/",
  titleValidation,
  inputValidationMiddleWare,
  async function (req: Request, res: Response) {
    const newProduct: ProductType = await productsService.createProduct(
      req.body.title
    );
    res.status(201).json(newProduct);
  }
);

productsRouter.get("/:id", function (req: Request, res: Response) {
  let product = productsService.findProductById(Number(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.send(404);
  }
});

productsRouter.put(
  "/:id",
  titleValidation,
  inputValidationMiddleWare,
  async function (req: Request, res: Response) {
    let isUpdated = await productsService.updateProduct(
      Number(req.params.id),
      req.body.title
    );
    if (isUpdated) {
      const product = await productsService.findProductById(
        +req.params.id
      );
      res.send(product);
    } else {
      res.send(404);
    }
  }
);

productsRouter.delete("/:id", async function (req: Request, res: Response) {
  let isDeleted = await productsService.deleteProduct(
    Number(req.params.id)
  );
  if (isDeleted) {
    res.send(204);
  } else {
    res.send(404);
  }
});
