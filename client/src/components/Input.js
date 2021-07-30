import React, { useState } from "react";
import axios from "axios";

export default function CreateTodo({ getTodos }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");
//   const todoCompleted = false;
const [modal, setModal] = useState(false);

const toggleModal = () => {
  // onSubmit();
  setModal(!modal);
};

if(modal) {
  document.body.classList.add('active-modal')
} else {
  document.body.classList.remove('active-modal')
}
  const onSubmit = e => {
    e.preventDefault();

    const newTodo = {
     name,
     desc,
     type
    };

    axios
      .post("http://localhost:5000/api/user/addList", newTodo)
      .then(res => console.log(res.data))
      .then(getTodos());
  }

  return (
    <div className="left">
        <button onClick={toggleModal} className="btn-modal">
        Add new Task
      </button>
      {/* <h3>Create Todo</h3> */}
      {modal && ( <div className="modal"> <form className="overlay" onSubmit={onSubmit}>
        <div className="contact-form">
       
      
        
        <div className="txtb">
          <label> Name</label>
          <input
            type="text"
            placeholder="Please enter Task Name"
            className="left_button1"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="txtb">
          <label> Description</label>
          <input
            type="text"
            className="left_button1"
            placeholder="Please enter Decription"
            value={desc}
            onChange={e => setDesc(e.target.value)}
          />
        </div>

        <div className="txtb">
          <label>Type</label>
          <input
            type="text"
            placeholder="Please enter Task Type"
            className="left_button1"
            value={type}
            onChange={e => setType(e.target.value)}
          />
        </div>
      
        <div className="btn">
          <input
            type="submit"
            className="left_submit1"
            value="Create Todo"
          /></div>
          <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
        </div>
       
       
      </form></div>)}
    </div>
  );
}