import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Home extends Component {
  render() {
    return (
      <div>
        这是首页{this.props.data}
      </div>
    )
  }
}

Home.defaultProps={
  data:'test'
}

Home.propTypes={
  title:PropTypes.string
}