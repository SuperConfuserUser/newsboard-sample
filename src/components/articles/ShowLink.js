import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ShowLink extends Component {
  render() {
    const { link, children } = this.props

    return (
      <Link to={link}>
        {children}
      </Link>
    )
  }
}

//TODO: add onClick event that adds this to link list
