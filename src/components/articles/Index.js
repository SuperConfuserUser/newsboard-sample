import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'

const Articles = props => {
  const renderArticles = props.articles.map(article => (
    <Link to={`/articles/${article.id}`}>
      <Card article={article} />
    </Link>
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

