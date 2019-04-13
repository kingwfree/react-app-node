import React, { Component } from 'react';
import { DatePicker } from 'antd';
import "antd/dist/antd.css";

const { MonthPicker } = DatePicker;
class App extends Component {
  state={
    data:'',
    user:'',
    sex:'1',
    citylist:['福州','上海','北京','广东'],
    city:'',
    like:[
      {
        title:'吃饭',
        checked:true
      },
      {
        title:'睡觉',
        checked:false
      },
      {
        title:'打豆豆',
        checked:false
      }
    ],
    text:''
  }
  handleChange=(e)=>{
    //console.log(e.target)
    this.setState({
      data:e.target.value
    })
  }
  //阻止表单提交跳转页面的默认行为
  handleSubmit=(e)=>{
    e.preventDefault();
    console.log(
      this.state.user,
      this.state.sex,
      this.state.city,
      this.state.like,
      this.state.text
      )
  }
  handleUser=(e)=>{
    this.setState({
      user:e.target.value
    })
  }
  handleSex=(e)=>{
    this.setState({
      sex:e.target.value
    })
  }
  handleCity=(e)=>{
    this.setState({
      city:e.target.value
    })
  }
  handleLike=(index)=>{
    const like = this.state.like
    like[index].checked = !like[index].checked
    this.setState({
      like
    })
  }
  componentDidMount(){
    this.setState({
      city:this.state.citylist[0]
    })
  }
  handleText=(e)=>{
    this.setState({
      text:e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <DatePicker />
        <MonthPicker />
        <hr />
        <form onSubmit={this.handleSubmit}>
            {
                //非受控（非约束性）表单控件 不监听用户输入的值
                    //没有对表单进行监听
                //受控（约束性）表单控件 监听用户输入的值
                //一般通过 ajax axios fetch...

            }
            <input 
                type="text" 
                onChange={this.handleChange}
            />
            用户名：<input type="text" onChange={this.handleUser} />
            性别：<input type="radio" value="1" checked={this.state.sex === '1'} onChange={this.handleSex} />男 
                  <input type="radio" value="0" checked={this.state.sex === '0'} onChange={this.handleSex} />女
            
            {
              this.state.citylist.length>0 && (
                <select value={this.state.city} onChange={this.handleCity}>
                  {
                    this.state.citylist.map(
                      (item,index)=><option key={index} >{item}</option>
                    )
                  }
                </select>
              )
            }
            {
              this.state.like.length>0 && (
                this.state.like.map(
                  (item,index)=>{
                    return (
                      <div key={index}>
                        {item.title}:
                        <input 
                          type="checkbox"
                          checked={item.checked} 
                          onChange={this.handleLike.bind(this,index)}
                        />
                      </div>
                    )
                  }
                )
              )
            }
            <br />
            <textarea 
              cols="30" 
              row="10"
              value={this.state.text}
              onChange={this.handleText}
            ></textarea>

            <input type="submit" value="提交" />
            {this.state.data}
        </form>
      </div>
    );
  }
}

export default App;
