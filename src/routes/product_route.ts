import { ProductType } from "../repositories/products_in_memory_repositories";
import { Request, Response, Router } from "express";
import { productsRepositories } from "../repositories/products_db_repositories";
import { inputValidationMiddleWare } from "../middlewares/input_validation_middleware";
import { titleValidation } from "../middlewares/input_validation_middleware";

export const productsRouter = Router({});

productsRouter.get("/", async function (req: Request, res: Response) {
  const foundProducts: ProductType[] = await productsRepositories.findProducts(
    req.query.title?.toString()
  );
  res.json(foundProducts);
});

productsRouter.post(
  "/",
  titleValidation,
  inputValidationMiddleWare,
  async function (req: Request, res: Response) {
    const newProduct: ProductType = await productsRepositories.createProduct(
      req.body.title
    );
    res.status(201).json(newProduct);
  }
);

productsRouter.get("/:id", function (req: Request, res: Response) {
  let product = productsRepositories.findProductById(Number(req.params.id));
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
    let isUpdated = await productsRepositories.updateProduct(
      Number(req.params.id),
      req.body.title
    );
    if (isUpdated) {
      const product = await productsRepositories.findProductById(
        +req.params.id
      );
      res.send(product);
    } else {
      res.send(404);
    }
  }
);

productsRouter.delete("/:id", async function (req: Request, res: Response) {
  let isDeleted = await productsRepositories.deleteProduct(
    Number(req.params.id)
  );
  if (isDeleted) {
    res.send(204);
  } else {
    res.send(404);
  }
});
