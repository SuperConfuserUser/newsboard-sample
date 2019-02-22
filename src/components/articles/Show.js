import React from 'react'
import ExternalLink from './ExternalLink'
import MoreArticles from './MoreArticles'

const Article = props => {
  const {source, author, title, description, url, urlToImage, content} = props.article

  return (
    <div class='article-page'>
      <div class='article-content'>
        <img src={urlToImage} alt={description} />
        <h1>{title}</h1>
        <p class='attributes'>{source.name} - {author}</p>
        <p class='excerpt'>{content}</p>
        <ExternalLink link={url} />
      </div>
      <MoreArticles />
    </div>
  )
}

export default Article
