import React from 'react'
import Card from './Card'
import ShowLink from './ShowLink'

const Articles = props => {
  const renderArticles = props.articles.map(article => (
    <ShowLink link={`/articles/${article.id}`}>
      <Card article={article} />
    </ShowLink>
  ))

  return (
    <div>      
      <ul>
        {renderArticles}
      </ul>
    </div>
  )
}

export default Articles

