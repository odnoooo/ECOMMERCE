import { Router } from "express";
import { getMe } from "../controllers/user.conrtoller";

export const userRouter =Router();

userRouter.get("/me", getMe);