import React from 'react';
import './App.css';
import TodoList_IO from './TodoList_IO.js';
import Listing from './Listing';
import Header from './Header';

class App extends React.Component
{
  constructor(props)
  {
    super(props);
    
    this.state=
    {
      tasks:[],
      currentInput:{text:'',key:''},
      emptyField:[],
    }
    this.inputElement=React.createRef();  
  }
  
  componentDidUpdate()
  {
    this.inputElement.current.focus()
  }
  handleInput=e=>
  {
    this.setState(
    {
      currentInput:{text:e.target.value ,key:Date.now()},
      emptyField:e.target.value,
    }
    )
  }

  createTask=e=>
  {
    if(this.state.currentInput.text!=='')
    {
    e.preventDefault();

    this.setState({
      tasks:[...this.state.tasks,this.state.currentInput],
      currentInput:{text:'' ,key:''},
      emptyField:'',
    })
  }
  }

  deleteItem = key => {
    const filteredItems = this.state.tasks.filter(task => {
      return task.key !== key
    })
    this.setState({
      tasks: filteredItems,
    })
  }
  render()
  {
   return( <div className="App">
    <Header/>
    <TodoList_IO create_task={this.createTask} handleInput={this.handleInput} inputElements ={this.inputElement} emptyField={this.state.emptyField}/>
    <Listing entries={this.state.tasks} delete={this.deleteItem}/>
    </div>)
  }
}

export default App;
  