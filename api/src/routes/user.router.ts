import express  from "express";
import { getMe } from "../controllers/auth/auth.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import{login, register,} from "../controllers"

const userRouter =express.Router();

userRouter.post("/login",login );
userRouter.post("/register", register);
userRouter.get("/me",authMiddleware,getMe);
 
export default userRouter;