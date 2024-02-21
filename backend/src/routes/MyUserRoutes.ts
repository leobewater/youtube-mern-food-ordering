import express from "express";
import myUserController from "../controllers/MyUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import MyUserController from "../controllers/MyUserController";
import { validateMyUserRequest } from "../middleware/validation";

const router = express.Router();

// /api/my/user with middleware
router.post("/", jwtCheck, myUserController.createCurrentUser);
router.put(
  "/",
  jwtCheck,
  jwtParse,
  validateMyUserRequest,
  MyUserController.updateCurrentUser
);

export default router;
