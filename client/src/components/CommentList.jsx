import React, { useState } from 'react';
import { addReply } from '../api';

const CommentList = ({ comments, postId, onReplyAdded }) => {
    return (
        <div style={{ paddingLeft: '20px' }}>
            {comments.map((comment) => (
                <div key={comment._id} style={{ marginBottom: '10px' }}>
                    <p>{comment.text}</p>
                    <ReplyForm postId={postId} commentId={comment._id} onReplyAdded={onReplyAdded} />
                    {comment.replies && comment.replies.map((reply) => (
                        <div key={reply._id} style={{ paddingLeft: '20px' }}>
                            <p>{reply.text} - {reply.author}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

const ReplyForm = ({ postId, commentId, onReplyAdded }) => {
    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addReply(postId, commentId, { text, author });
        setText('');
        setAuthor('');
        onReplyAdded();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Your name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <input
                type="text"
                placeholder="Add a reply"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Reply</button>
        </form>
    );
};

export default CommentList;
