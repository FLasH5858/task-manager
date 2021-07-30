import React, { Component } from 'react';
import axios from 'axios';
import Input from './Input';
import ListTodo from './ListTodo';
import Type from './Type.js'
// import Count from './Count.js'
class Todo extends Component {
  state = {
    todos: []
  }
  componentDidMont(){
    this.getTodos();
  }
  getTodos = () => {
    axios.get('http://localhost:5000/api/user/getTaskList')
      .then(res => {
        if(res.data){
          this.setState({todos: res.data})
        }
      })
      .catch(err => console.log(err))
  }

  getTaskType = (e) => {
   // e.preventDefault();
    axios.get(`http://localhost:5000/api/user/getTaskLists/${e}`)
      .then(res => {
        if(res.data){
          this.setState({todos: res.data})
        }
      })
      .catch(err => console.log(err))
  }

 
render(){
  let { todos } = this.state;
  
  return(
    <div className="left">
       <div className="left__header">
      <h1>Task List</h1>
      <Input getTodos={this.getTodos}/>
      <Type getTaskType={this.getTaskType}/>
      {/* <Count getCount={this.getCount}/> */}
      </div>
      <ListTodo todos={todos}  />
     
    </div>
    )
  }
}
export default Todo;