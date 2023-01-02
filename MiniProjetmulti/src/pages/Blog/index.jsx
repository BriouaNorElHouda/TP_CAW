import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../Home/myposts';
import './styles.css';
import { Link } from 'react-router-dom';

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    let post = blogList.find((post) => post.id === parseInt(id));
    if (post) {
      setPost(post);
    }
  }, []);

  return (
    <>
      <Link className='blog-goBack' to='/Blog'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {post ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {post.date}</p>
            <h1>{post.subject}</h1>
            
          </header>
          <img src={post.image} alt='image' />
          <p className='blog-desc'>{post.description}</p>
        </div>
      ) : "There are no posts yet!"}
    </>
  );
};

export default Post;
