import React, { useState, useEffect } from 'react';
import '../App.css';
const Type = ({ getTaskType }) => {
    const [type, setType] = useState("");

    useEffect(() => {
        getTaskType(type);
        // eslint-disable-next-line
      }, [type]);

  return(
    <div class="left_type">
    <div class="left_type1">Task According to Type</div>
    <div class="left_type2">
      <button value="Completed"  onClick={e => setType(e.target.value)}>Completed</button>
      <button value="Progress"  onClick={e => setType(e.target.value)}>Progress</button>
      {/* <button value="r"  onClick={e => setType(e.target.value)}>r</button> */}
    </div>
  </div>
    
  )
}
export default Type