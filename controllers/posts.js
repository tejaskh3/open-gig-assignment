import Post from "../model/Posts.js";

const createPost = async (req,res) =>{
try {
    const { title, content } = req.body;
    const post = new Post({
        title,
        content
    });
    const savedPost = await post.save();
    res.status(201).json({
        success: true,
        data: savedPost
    });
} catch (error) {
    res.status(500).json({
        success: false,
        message: error.message
    });
}
}

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json({
            success: true,
            data: posts
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const addComment = async (req, res) => {
    const { postId } = req.params;
    const { text } = req.body;

    try {
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ success: false, message: "Post not found" });
        }

        // Add the new comment
        post.comments.push({ text });
        await post.save();

        res.status(201).json({ success: true, data: post });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};


const addReply = async (req, res) => {
    const { postId, commentId } = req.params;
    const { text, author } = req.body;

    try {
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ success: false, message: "Post not found" });
        }
        const comment = post.comments.id(commentId);
        if (!comment) {
            return res.status(404).json({ success: false, message: "Comment not found" });
        }

        comment.replies.push({ text, author });
        await post.save();

        res.status(201).json({ success: true, data: post });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export {
    createPost,
    getAllPosts,
    addComment,
    addReply
}