import React from 'react'

function ListCount({count}) {
    return (
     <div className="list_count">
     {
      count && count.length > 0 ? ( count.map(todo=>{return(
            <div className="right_list">
                  <span className="sidebarChat">Task Type<div className="left_listw">{todo._id}</div></span>
        <span className="sidebarChat__info">Count<div className="left_listw"> {todo.total}</div></span>
          </div>
          )})):(<>No Task to Show</>)

       }
     </div>
    )
}

export default ListCount
