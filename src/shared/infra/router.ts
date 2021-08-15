import express from "express";
import { UserController } from "../../interface/controller/UserController";

const router = express.Router();
const userController = new UserController(dbconnection);

// user
router.post("/users", async (req, res): Promise<void> => {
  const result = await userController.createUser(req);
  res.send(result);
});
