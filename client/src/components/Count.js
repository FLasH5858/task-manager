import React,{useState} from 'react'
import ListCount from './ListCount';
import axios from "axios";
import '../App.css'
const Count = () => {
    const [count,setCount]= useState(['']);
    // const [flag,setFlag]= useState(false);

   
    // useEffect(() => {
    //   getCount();
    //   setFlag(false);
    //   // eslint-disable-next-line
    // }, [flag]);



  const  getCount = () => {
      axios.get('http://localhost:5000/api/user/taskCounts')
        .then(res => {
          if(res.data){
            setCount(res.data)
          }
        })
        .catch(err => console.log(err))
    }
  return(
    <div className="right">
    <button className="right_button"  onClick={()=> getCount()}>Count</button>
    <div className="right_heading">Get Task Count According to Type</div>
    <ListCount count={count}/>
  </div>
    
  )
}
export default Count
