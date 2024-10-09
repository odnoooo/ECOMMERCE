import { Router } from "express";
 import{
    getReviewByIdController,
    getReviewsController,
    createReviewController,
 } from "../controllers/review"

 const reviewRouter=Router();

 reviewRouter
 .get("/", getReviewsController)
 .get("/:id", getReviewByIdController)
 .post("/", createReviewController);
  

 export {reviewRouter};