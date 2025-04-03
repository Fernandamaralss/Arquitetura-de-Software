import express from "express";
import PostController from "../controllers/postController.js";

const routes = express.Router();

routes.get("/posts", PostController.listarPosts);