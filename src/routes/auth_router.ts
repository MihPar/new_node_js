import { Router, Request, Response } from "express";
import { usersService } from "../domain/users_sercvice";

export const authRouter = Router({});

authRouter.post("/", async function (req: Request, res: Response) {
  const checkResult = await usersService.checkCredentials(
    req.body.loginOrEmail,
    req.body.password
  );
  if (checkResult) {
    res.sendStatus(201);
  } else {
    res.sendStatus(401);
  }
});
