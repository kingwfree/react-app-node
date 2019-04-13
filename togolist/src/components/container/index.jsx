import React, { Component } from 'react'
import List from '../list/index'

export default class Container extends Component{
    constructor(props){
        super(props)
        //构造函数里只执行一次
        //父组件里的数据已经更新了，
        //而子组件里的却没有变化
        this.state={
            flag:this.props.flag
        }
        //父组件更新了，子组件要用生命周期函数来获取
        //父组件更新后的数据
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log(nextProps,nextState)
        //nextProps里的值是父组件传过来的
        if( this.state.flag !== nextProps.flag ){
            this.setState({
                flag:nextProps.flag
            })
        }
        //父组件传过来的this.state.flag 当前的nextState.flag
        //if(this.state.flag != nextState.flag)this.togolist(nextState.flag)
        //console.log(this.state.flag,nextState)
        this.togolist(this.state.flag)
        return true
    }
    componentDidMount(){
        this.togolist(this.state.flag)
    }
    togolist=(flag)=>{
        const ele = this._list
        //console.log(ele)
        if(flag)ele.style.height = ele.scrollHeight+'px'
        else ele.style.height = '0px'
    }

    handleFlex=(index)=>{
        //console.log(this.props.flag)
        let flag = !this.state.flag
        //flag = !flag
        this.setState({
            flag
        })
        //console.log(this)
        //console.log(flag)
        //更新父组件的数据
        this.props.changeFn(index)
        
    }
    render(){
        //console.log(this.props)
        const {name,list,index} = this.props
        return (
            <div>
                <p
                    onClick={this.handleFlex.bind(this,index)}
                >
                    {name}
                </p>
                {
                    // this.state.flag && (
                    //     <ul>
                    //         {
                    //             list.map((item,index)=>{
                    //                 return (
                    //                     <li key={index}>
                    //                         <p>{item['name']}</p>
                    //                         <p>{item['gender']}</p>
                    //                         <p>{item['introduce']}</p>
                    //                     </li>  
                    //                 )
                    //             })
                    //         }
                    //     </ul>
                    // )
                    <div
                        className="list"
                        ref={listItem=>this._list=listItem}
                    >
                        <List 
                            list={list}
                        />    
                    </div>
                }
            </div>
        )
    }
}
