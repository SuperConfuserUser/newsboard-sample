import React from 'react'

const MoreCard = ({ article: { source, author, title, description, urlToImage } }) => { 

  return (
    <li className='more-card'>
      <img src={urlToImage} alt={description} />
      <div>
        <h2>{title}</h2>
        <p className='attributes'>{source.name} - {author}</p>
      </div>
    </li>
  )
}

export default MoreCard