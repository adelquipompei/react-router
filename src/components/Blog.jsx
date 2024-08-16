import React from 'react'
import posts from '../data/posts'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Blog() {
    return (
        <div>
            <TituloPagina>Blog</TituloPagina>
            <ul>
                {posts.map(post => <li key={post.id}> <Link to={`/post/${post.id}`}>{post.titulo}</Link> </li>)}
            </ul>
        </div>
    )
}

 export const TituloPagina = styled.h2`
margin-bottom: 10px;
`

export default Blog