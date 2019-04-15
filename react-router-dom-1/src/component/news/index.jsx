import React, { Component } from 'react'
import { Route,NavLink,Switch } from "react-router-dom"
import './index.css'

export default class News extends Component {
  state={
    num:0
  }
  componentDidMount(){
    this.setState({
      num:1
    })
  }
  render() {
    //console.log(this.props.match)
    const path = this.props.match.path
    const routers = this.props.abc
    //console.log(this.props)
    return (
      <div className='news'>
        <div className="list">
            <ul>
              <li><NavLink activeClassName={'on'} to={`${path}/newsdetail/1`} >新闻1</NavLink></li>
              <li><NavLink to={`${path}/newsdetail/2`} >新闻2</NavLink></li>
              <li><NavLink to={`${path}/newsdetail/3`} >新闻3</NavLink></li>
              <li><NavLink to={`${path}/newsdetail/4`} >新闻4</NavLink></li>
            </ul>
        </div>
        <div className="info">
          {/* {
            path === '/news' && (
              <Redirect to={`${path}/newsdetail/1`} />
            )
          } */}
          <Switch>
            {
              routers.length>0 && (
                routers.map((item,index)=>{
                  return <Route key={index} exact={item.exact?true:false} path={path+item.path} component={item.component}/>
                })
                
              )
            }
          </Switch>
        </div>
      </div>
    )
  }
}
