import React from 'react'
import ExternalLink from './ExternalLink'

const Article = props => {
  const { title, description } = props.article

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <ExternalLink link='boop' />
    </div>
  )
}

export default Article
