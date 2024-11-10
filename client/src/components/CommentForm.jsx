import React, { useState } from 'react';
import { addComment } from '../api';

const CommentForm = ({ postId, onCommentAdded }) => {
    const [text, setText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addComment(postId, { text });
        setText('');
        onCommentAdded();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a comment"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Add Comment</button>
        </form>
    );
};

export default CommentForm;
