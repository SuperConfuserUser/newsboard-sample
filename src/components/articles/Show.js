import React from 'react'

const Article = props => {
  const { title, description } = props.article

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default Article
