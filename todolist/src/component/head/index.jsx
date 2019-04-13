import React,{ Component } from 'react'

export default class Head extends Component {
	constructor(props){
		super(props)
		this.state = {
			onkeydown:props.keydown
		}
	}
	render(){
		//console.log(this.props.keydown);
		return (
			<header className="header">
				<h1>todos</h1>
				<input
					className="new-todo"
					placeholder="What needs to be done?"
					autoFocus
					onKeyDown={this.state.onkeydown}
				/>
			</header>
		)
	}
}
