import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ShowLink extends Component {
  render() {
    const { link, children } = this.props

    return (
      <div class='article-show-link'>
        <Link to={link}>
          {children}
        </Link>
      </div>
    )
  }
}

//TODO: add onClick event that adds this to link list
