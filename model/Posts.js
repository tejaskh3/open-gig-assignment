import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: { type: String},
    content: { type: String },
    comments: [{
        text: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
        replies: [{
            text: { type: String, required: true },
            author: { type: String, required: true },
            createdAt: { type: Date, default: Date.now }
        }]
    }],
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Post', PostSchema);
