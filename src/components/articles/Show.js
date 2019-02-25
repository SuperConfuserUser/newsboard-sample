import React from 'react'
import ExternalLink from './ExternalLink'
import MoreArticles from './MoreArticles'
import Content from './Content'

const Article = ({ article: { source, author, title, description, url, urlToImage, content } }) => {

  return (
    <div className='article-container'>
      <div className='article-content'>
        <img src={urlToImage} alt={description} />
        <h1>{title}</h1>
        <p className='attributes'>{source.name} - {author}</p>
        <Content content={content} />
        <ExternalLink link={url} />
        <h3>Stories Curated for You</h3>
      </div>
      <MoreArticles />
    </div>
  )
}

export default Article
