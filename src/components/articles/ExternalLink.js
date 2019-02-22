import React, { Component } from 'react'

export default class ExternalLink extends Component {
  render() {
    return (
      <div class='outbound-link-container'>
        <a class='outbound-link' href={this.props.link} target='_blank' rel='noopener noreferrer'>
          View on engadget.com
        </a>
      </div>
    )
  }
}

//TODO: add onClick event that adds this to link list
