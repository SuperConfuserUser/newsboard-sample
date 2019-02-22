import React from 'react'

const MoreCard = props => {

  const {source, author, title, description, urlToImage, content} = props.article
  return (
    <li class='more-card'>
      <img src={urlToImage} alt={description} />
      <h2>{title}</h2>
      <p class='attributes'>{source.name} - {author}</p>
    </li>
  )
}

export default MoreCard