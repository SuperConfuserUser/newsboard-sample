import React from 'react'

const Content = ({ content }) => {
  
  const parsedContent = content.replace(/\[\+.*?\]+$/g, '')

  return (
    <p className='excerpt'>{parsedContent}</p>
  )
}

export default Content


