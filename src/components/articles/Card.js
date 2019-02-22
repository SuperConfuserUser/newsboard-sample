import React from 'react'

const ArticleCard = props => {

  const {source, author, title, description, urlToImage, content} = props.article
  return (
    <li class='article-card'>
      <img src={urlToImage} alt={description} />
      <h2>{title}</h2>
      <p class='attributes'>{source.name} - {author}</p>
      <p class='excerpt'>{content}</p>
    </li>
  )
}

export default ArticleCard


