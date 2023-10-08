import { usersService } from "./../domain/users_sercvice";
import { Response } from "express";
import { Router } from "express";

export const usersRouter = Router({});

usersRouter.post("/", async function (req: Request, res: Response) {
  const newProduct = await usersService.createUser(
    req.body.login,
    req.body.email,
    req.body.password
  );
  return res.status(201).send(newProduct);
});
