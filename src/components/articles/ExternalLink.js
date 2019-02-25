import React, { Component } from 'react'

export default class ExternalLink extends Component {
  render() {
    return (
      <div className='outbound-link-container'>
        <a className='outbound-link' href={this.props.link} target='_blank' rel='noopener noreferrer'>
          View on engadget.com
        </a>
      </div>
    )
  }
}

//TODO: add onClick event that adds this to link list
