import React from 'react';
import './article.css';

function Article({ imageUrl, date, title }) {
  return (
    <div className='gpt3__blog-content__article'>
      <div className='gpt3__blog-content__article-image'>
        <img src={imageUrl} alt='blog.png' />
      </div>
      <div className='gpt3__blog-content__article-content'>
        <div>
          <p>{(date ||= 'Feb 26, 2023')}</p>
          <h3>
            {
              (title ||=
                'GPT-3 and Open AI is the future. Let us exlore how it is?')
            }
          </h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
}

export default Article;
