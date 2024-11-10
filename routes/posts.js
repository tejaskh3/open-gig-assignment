import express from "express";
import { getAllPosts, createPost, addComment, addReply } from "../controllers/posts.js";

const router = express.Router();

router.get('/', getAllPosts);
router.post('/', createPost);
router.post('/:postId/comments', addComment);
router.post('/:postId/comments/:commentId/replies', addReply);

export default router;