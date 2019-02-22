import React from 'react'
import Card from './Card'

const Articles = props => {
  const renderArticles = props.articles.map(article=> 
      <Card article={article} />
  )

  return (
    <div>      
      <ul>
        {renderArticles}
      </ul>
    </div>
  )
}

export default Articles

