import React from 'react'
import Card from './Card'
import ShowLink from './ShowLink'

const Articles = props => {
  const renderArticles = props.articles.map(article => (
    <ShowLink link={`/articles/${article.link}`}>
      <Card article={article} />
    </ShowLink>
  ))

  return (
    <div>      
      <ul class='article-list'>
        {renderArticles}
      </ul>
    </div>
  )
}

export default Articles

