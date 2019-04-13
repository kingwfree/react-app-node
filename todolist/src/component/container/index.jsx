import React,{ Component } from 'react'

export default class Main extends Component{
	render(){
		//console.log(this.props.data)
		const list = this.props.data;
		return (
			<section className="main">
				<input id="toggle-all" className="toggle-all" type="checkbox" />
				<label htmlFor="toggle-all">Mark all as complete</label>
				<ul className="todo-list">
					{
						list.length>0 && list.map((item,index)=>{
							return (
								<li key={index}>
									<div className="view">
										<input className="toggle" type="checkbox" />
										<label>{item.name}</label>
										<button
											className="destroy"
											onClick={this.props.removeFn.bind(this,item.index)}
										> </button>
										<input className="edit" defaultValue="Rule the web" />
									</div>
								</li>
							)
						})
					}
				</ul>
			</section>
		)
	}
}
