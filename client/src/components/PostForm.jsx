import React, { useState } from 'react';
import { createPost } from '../api';

const PostForm = ({ onPostCreated }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createPost({ title, content });
        setTitle('');
        setContent('');
        onPostCreated();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit">Add Post</button>
        </form>
    );
};

export default PostForm;
