import axios from 'axios';

const api = axios.create({ // TODO: add in env
    baseURL: 'https://open-gig-assignment-qdm7.vercel.app/api/v1' 
});

export const fetchPosts = () => api.get('/posts');
export const createPost = (post) => api.post('/posts', post);
export const addComment = (postId, comment) => api.post(`/posts/${postId}/comments`, comment);
export const addReply = (postId, commentId, reply) => api.post(`/posts/${postId}/comments/${commentId}/replies`, reply);
