import React, { useEffect } from 'react';
import posts from '../data/posts';
import { useNavigate, useParams } from 'react-router-dom';

function Post() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts[id - 1]; // Encontramos el post por el id

  useEffect(() => {
    if (!post) {
      navigate('/'); // Navegar a la página de inicio si el post no existe
    }
  }, [navigate, post]);

  // Si no existe el post, no renderizamos nada
  if (!post) return null;

  return (
    <div>
      <h2>{post.titulo}</h2>
      <p>{post.texto}</p>
    </div>
  );
}

export default Post;
