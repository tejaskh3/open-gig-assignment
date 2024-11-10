import React, { useEffect, useState } from 'react';
import { fetchPosts } from './api';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

function App() {
    const [posts, setPosts] = useState([]);

    const loadPosts = async () => {
        try {
            const response = await fetchPosts();
            setPosts(response.data.data);
        } catch (error) {
            console.error("Error loading posts", error);
        }
    };

    useEffect(() => {
        loadPosts();
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            <PostForm onPostCreated={loadPosts} />
            <PostList posts={posts} onCommentAdded={loadPosts} />
        </div>
    );
}

export default App;
