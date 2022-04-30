import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../../../components/BlogPost/Footer';

const DetailPost = (props) => {
  const [post, setPost] = useState({});
  let { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3004/posts/${id}`)
      .then(res => {
        console.log(res.data);
        setPost(res.data);
      });
  }, []);

  return (
    <>
      <div className='container py-4'>
        <div className="row">
          <div className="col-md-8">
            <h2 className='fw-bold'>{post.title}</h2>
            <span className='badge bg-dark'>Author: {post.author}</span>

            <div className='my-5'>
              <p className='fs-6'>{post.body}</p>
              <Link to="/posts" className='btn btn-primary mt-3'>Go back to posts</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DetailPost;