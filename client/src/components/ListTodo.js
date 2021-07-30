import React from 'react';
import '../App'
const ListTodo = ({ todos }) => {
  return(
    
    //  <div className="chat__body">
    //   {  todos.map(todo=>{return(
    //       <li key={todo._id}>{todo.name}</li>
    //     )})}
    //   </div>

    <div className="left__body">
     
    { todos && todos.length > 0 ? (todos.map(message => (
       <div className="left_list">
        <span className="sidebarChat">Task Name<div className="left_listw">{message.name}</div></span>
        <span className="sidebarChat__info">Task Description<div className="left_listw"> {message.desc}</div></span>
        <span className="sidebarChat__info">Task Type<div className="left_listw">{message.type}</div></span>
        </div>
    ))):(<>No Task to Show</>)
  }
    </div>

    
  )
}
export default ListTodo