import React from 'react'

const Articles = props => {
  const articles = ['1', '2', '3', '4']
  const renderArticles = articles.map(article=> 
      <li>Article {article}</li>
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

