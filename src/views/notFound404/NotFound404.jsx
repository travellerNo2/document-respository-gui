import React from 'react';
import { useNavigate } from 'react-router';
import './NotFound404.css';

export default function NotFound404() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <article className="not-found">
      <h1>404 Not Found</h1>
      <p onClick={handleClick}>Click here to return</p>
    </article>
  );
}
