import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {

	//对接收的props进行：类型、必要性的限制
	static propTypes = {
		addTodo:PropTypes.func.isRequired
	}

	
	render() {
		return (
			<div className="todo-header">
				<input type="text" placeholder="请输入你的任务名称，按回车键确认"/>
			</div>
		)
	}
}