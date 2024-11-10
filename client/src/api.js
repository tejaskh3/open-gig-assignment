import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8888/api/v1'  // Replace with your backend server URL
});

export const fetchPosts = () => api.get('/posts');
export const createPost = (post) => api.post('/posts', post);
export const addComment = (postId, comment) => api.post(`/posts/${postId}/comments`, comment);
export const addReply = (postId, commentId, reply) => api.post(`/posts/${postId}/comments/${commentId}/replies`, reply);
