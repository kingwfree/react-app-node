import React, { Component } from 'react'

export default class Newsdetail extends Component {
  render() {
    const id = this.props.match.params.id;
    return (
      <div>
        这是新闻详情页{id}
      </div>
    )
  }
}
