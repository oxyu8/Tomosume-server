import express from "express";
import { UserController } from "../interface/controller/UserController";

export const router = express.Router();

const userController = new UserController();

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
