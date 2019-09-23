import React from 'react'

class TodoList_IO extends React.Component
{

 
	render()
	{

		return(<div>
			<form className="Form" onSubmit={this.props.create_task}>	
			<input ref={this.props.inputElements} className="Adder" placeholder="Please Add Tasks here" onChange={this.props.handleInput} value={this.props.emptyField} />
			<button className="submits" type="submit">Create Task</button>
			</form>
			</div>	)
	}
}
export default TodoList_IO