import React from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const PostList = ({ posts, onCommentAdded }) => {
    return (
        <div>
            {posts.map((post) => (
                <div key={post._id} style={{ border: '1px solid #ddd', marginBottom: '10px', padding: '10px' }}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <CommentForm postId={post._id} onCommentAdded={onCommentAdded} />
                    <CommentList comments={post.comments} postId={post._id} onReplyAdded={onCommentAdded} />
                </div>
            ))}
        </div>
    );
};

export default PostList;
