import { feedbackService } from "./../domain/feedbackService";
import { Request, Response, Router } from "express";

export const feedbackRouter = Router({});

feedbackRouter
  .post("/", async function (req: Request, res: Response) {
    const newProduct = await feedbackService.sendFeedback(
      req.body.comment,
      req.user!._id
    );
    res.status(200).send(newProduct);
  })
  .get("/", async function (req: Request, res: Response) {
    const users = await feedbackService.allFeedback();
    res.send(users);
  });
