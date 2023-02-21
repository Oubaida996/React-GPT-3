import React from 'react';
import './blog.css';
import { Article } from '../../components';
import {
  blog01,
  blog02,
  blog03,
  blog04,
  blog05,
} from '../../components/article/import';

function Blog() {
  return (
    <div className='gpt3__blog section__padding'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>
          A lot is happening,<span  style={{display:'block'}}>We are blogging about it.</span> 
        </h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imageUrl={blog01} />
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imageUrl={blog02} />
          <Article imageUrl={blog03} />
          <Article imageUrl={blog04} />
          <Article imageUrl={blog05} />
        </div>
      </div>
    </div>
  );
}

export default Blog;
