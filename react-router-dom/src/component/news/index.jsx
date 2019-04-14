import React, { Component } from 'react'
import {Redirect,NavLink} from 'react-router-dom'

export default class News extends Component {
  state={
    num:0,
  }
  change=()=>{
    //在组件卸载之后 不要更新state状态
    // setTimeout(()=>{
    //   this.setState({
    //     num:1
    //   })
    // },3000)
    this.onOff = true
    if(this.onOff){
      setTimeout(()=>{
        if(this.onOff){
          this.setState({
            num:1
          })
        }
      },3000)
    }
  }
  componentDidMount(){
    this.change()
  }
  componentWillUnmount(){
    // this.setState=()=>{
    //   return
    // }
    this.onOff=false
  }
  render() {
    return (
      <div>
        这是news组件
        {
            this.state.num === 1 && (
              <Redirect to="/b" />
            )
        }
        <ul>
          <li>
            <NavLink to={'/newsd/111'}>{1}</NavLink>
          </li>
          <li>
            <NavLink to={'/newsd/222'}>{2}</NavLink>
          </li>
          <li>
            <NavLink to={'/newsd/333'}>{3}</NavLink>
          </li>
          <li>
            <NavLink to={'/newsd?b=44'}>{44}</NavLink>
          </li>
          <li>
            <NavLink to={'/newsd?b=55'}>{55}</NavLink>
          </li>
          <li>
            <NavLink to={'/newsd?b=66'}>{66}</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}
