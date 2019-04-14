import React, { Component } from 'react'
import Url from 'url'

export default class Newsdetail extends Component {
  render() {
    console.log(this.props)
    //根据id向后端申请数据
    //const id = this.props.match.params.a
    //传入true 变成一个字典
    const id = Url.parse(this.props.location.search,true).query.b
    console.log(id)
    return (
      <div>
        Newsdetail组件
      </div>
    )
  }
}
