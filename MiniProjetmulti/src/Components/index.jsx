import React from 'react';
import { Link } from 'react-router-dom';
import Like from '../Like/Like';
import './styles.css'

const Blog = ({
  post: {
    description,
    subject,
    date,
    image,
    id,
  },
}) => {
  return (
    <div className='blogItem-wrap'>
      <img className='blogItem-cover' src={image} alt='image' />
      
      <h3>{subject}</h3>
      <p className='blogItem-desc'>{description}</p>
      <footer>
        <div>
            <p>{date}</p>
            <Like/>
          </div>
        <Link className='blogItem-link' to={`/blog/${id}`}>
          know more...
        </Link>
      </footer>
    </div>
  );
};

export default Blog;
