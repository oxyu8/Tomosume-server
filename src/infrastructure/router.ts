import express from "express";
import { ReviewController } from "../interface/controller/ReviewController";
import { UserController } from "../interface/controller/UserController";

export const router = express.Router();

const userController = new UserController();
const reviewController = new ReviewController();

// user
router.get("/users", async (_, res: any): Promise<void> => {
  const result = await userController.getAllUsers();
  res.send(result);
});
router.post(
  "/createUser",
  // TODO: 型
  async (req: any, res: any): Promise<void> => {
    const result = await userController.createUser(req.query);
    res.send(result);
  }
);

router.get("/reviews", async (_, res: any): Promise<void> => {
  const result = await reviewController.getAllReviews();
  res.send(result);
});
