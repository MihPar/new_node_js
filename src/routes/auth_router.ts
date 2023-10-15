import { jwtService } from './../application/jwt-service';
import { Router, Request, Response } from "express";
import { usersService } from "../domain/users_service";

export const authRouter = Router({});

authRouter.post("/login", async function (req: Request, res: Response) {
//   const checkResult = await usersService.checkCredentials(
//     req.body.loginOrEmail,
//     req.body.password
//   );
//   if (checkResult) {
//     res.sendStatus(201);
//   } else {
//     res.sendStatus(401);
//   }
	const user = await usersService.checkCredentials(req.body.loginOrEmail, req.body.password)
	if(!user) {
		return res.sendStatus(401)
	} else {
		const token = await jwtService.createJWT(user)
		return res.status(200).send(token)
	}
});
