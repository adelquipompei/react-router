import React from 'react'
import posts from '../data/posts'
import { Link } from 'react-router-dom'

function Blog() {
    return (
        <div>
            <h2>Blog</h2>
            <ul>
                {posts.map((post) => <li key={post.id}> <Link to={`/post/${post.id}`}>{post.titulo}</Link> </li>)}
            </ul>
        </div>
    )
}

export default Blog