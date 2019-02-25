import React from 'react'
import Card from './Card'
import ShowLink from './ShowLink'

const Articles = ({ articles, articleCount }) => {
  const renderArticles = articles.map((article, i) => (
    <ShowLink link={`/articles/${i}`}>
      <Card key={i} article={article} />
    </ShowLink>
  ))
  
  return (
    <ul className='article-list'>
      {renderArticles}
    </ul>
  )
}

export default Articles