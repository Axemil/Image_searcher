import React, { Component } from 'react'

export default class SearchItem extends Component {
  render() {
    return (
      <img alt={this.props.info.tags} key={this.props.info.id} src={this.props.info.webformatURL}/>
    )
  }
}
