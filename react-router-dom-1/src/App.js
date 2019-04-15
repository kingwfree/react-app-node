import React, { Component } from 'react';
import { BrowserRouter as Router , NavLink,Route,Switch} from "react-router-dom"
import router from './router/index'
import './index.css'

class App extends Component {
  state={
    arr:[]
  }
  //假设这是从后端请求到的数据
  getData=()=>{
    const arr=[
      {
        to:'/',
        con:'首页'
      },
      {
        to:'/news',
        con:'新闻'
      },
      {
        to:'/user',
        con:'用户中心'
      }
    ]
    this.setState({
      arr
    })
  }
  componentDidMount(){
    this.getData()
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="topNav">
            {
              this.state.arr.length>0 && (
                <ul>
                  {
                    this.state.arr.map((item,index)=>{
                      if(index === 0) return (<li><NavLink key={index} activeClassName={'on'} to={item.to} >{item.con}</NavLink></li>)
                      else return (<li><NavLink key={index} to={item.to} >{item.con}</NavLink></li>)
                    })
                  }
                </ul>
              )
            }
          </div>
          <div className="container">
            <Switch>
              {
                router.length>0 && (
                  router.map((item,index)=>{
                    return (
                      <Route key={index} exact={item.exact?true:false} path={item.path} render={
                        (props)=>{
                          return <item.component {...props} abc={item.children} />
                        }
                      } />
                    )
                  })
                ) 
              }
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
