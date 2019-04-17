import React, { Component } from 'react'
import {connect} from 'react-redux'
import {add,remove,removeAsync} from './static/redux/redux'

@connect(state=>({abc:state}),{add,remove,removeAsync})

class Abc extends Component {
  render() {
    return (
      <div>
        abc组件
        {this.props.abc}
      </div>
    )
  }
}
export default Abc
