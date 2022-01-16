import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

	state = {mouse:false} //标识鼠标移入、移出






	render() {
		const {id,name,done} = this.props
		const {mouse} = this.state
		return (
			<li style={{backgroundColor:mouse ? '#ddd' : 'white'}}>
				<label>
					<input type="checkbox" checked={done} />
					<span>{name}</span>
				</label>
				<button  className="btn btn-danger" >删除</button>
			</li>
		)
	}
}