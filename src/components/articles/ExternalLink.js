import React, { Component } from 'react'

export default class ExternalLink extends Component {
  render() {
    return (
      <a href={this.props.link} target='_blank'>
        View on Engadget.com
      </a>
    )
  }
}

//TODO: add onClick event that adds this to link list
