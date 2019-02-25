import React from 'react'
import Content from './Content'

const ArticleCard = ({ article: { source, author, title, description, urlToImage, content } }) => {
  
  return (
    <li className='article-card'>
      <img src={urlToImage} alt={description} />
      <h2>{title}</h2>
      <p className='attributes'>{source.name} - {author}</p>
      <Content content={content} />
    </li>
  )
}

export default ArticleCard


