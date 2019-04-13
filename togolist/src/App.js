import React, { Component } from 'react';
import dataList from './static/js/data'
import Container from './components/container/index'

class App extends Component{
  state={
      flag:[true,false,false]
  }
  handleClick=()=>{
      //测试 没什么软用
      //console.log(this)
  }
  handleChange=(i)=>{
      const flag = this.state.flag.map((item,index)=>{
          if(index === i)return !this.state.flag[index]   //true
          return false
      })
      this.setState({
          flag
      })
      //console.log(flag)
  }
  render(){
      //console.log(dataList);
      const data = dataList
      return (
          <div onClick={this.handleClick}>
              {
                  Object.keys(data).map((item,index)=>{
                      return (
                          <Container
                              {...data[item]}
                              key={index}
                              index={index}
                              flag={this.state.flag[index]}
                              changeFn={this.handleChange}
                          />
                      )
                  })
              }

          </div>
      )
  }
}

export default App;
