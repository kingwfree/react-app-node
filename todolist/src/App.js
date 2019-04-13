import React,{ Component } from 'react';
import Head from './component/head/index.jsx'
import Main from './component/container/index.jsx'
import Foot from './component/foot/index.jsx'
import Info from './component/info/index.jsx'

class App extends Component{
	state={
		list :[]
	}
	handleItemOut= (e)=>{
		const {target,keyCode} = e;
		//console.log(target,keyCode)
		//不输入回车就不操作
		if(keyCode !== 13)return
		const txt = target.value.trim();
		target.value = ''
		//console.log(txt)
		if(!txt.length)return
		const list = this.state.list
		list.push({
			id:Math.random(),
			name:txt
		})
		this.setState({
			list
		})
	}
	handleRemove=(index)=>{
		//console.log(this)
		//console.log(index)
		const list = this.state.list
		list.splice(index,1)
		this.setState({
			list
		})
	}

	render(){
		return (
			<div>
				<section className="todoapp">
					<Head
						keydown={this.handleItemOut}
					/>
					{
						this.state.list.length > 0 && (
							<Main
								removeFn={this.handleRemove}
								data={this.state.list}
							/>
						)
					}
					<Foot />
				</section>
				<Info />
			</div>
		)
	}
}

export default App;
