import React, { Component } from 'react'

export default class List extends Component{
    render(){
        const {list} = this.props
        
        return (
            <ul>
                {
                    list.map((item,index)=>{
                        return (
                            <li key={index}>
                                <p>{item['name']}</p>
                                <p>{item['gender']}</p>
                                <p>{item['introduce']}</p>
                            </li>  
                        )
                    })
                }
            </ul>
        )
    }
}
