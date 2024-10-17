import { Router } from "express";
import { getMe } from "../controllers"; 

const authRouter=Router();
authRouter.get("/me",getMe);
export default authRouter;




