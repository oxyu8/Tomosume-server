import express from "express";
import { UserController } from "../interface/controller/UserController";
import { CreateUserRequest } from "../interface/request/CreateUserRequest";

export const router = express.Router();

const userController = new UserController();

// user
router.get("/users", async (_, res: any): Promise<void> => {
  const result = await userController.getAllUsers();
  res.send(result);
});
router.post(
  "/users",
  // TODO: 型
  async (req: CreateUserRequest, res: any): Promise<void> => {
    const result = await userController.createUser(req);
    res.send(result);
  }
);
