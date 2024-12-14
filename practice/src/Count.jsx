import {useState, React} from 'react'
const Count = () => {
  const [counter, setCount]=useState(0);
  const handleAdd=()=>{
    setCount((count)=>count+1)
  }
  const handleDelete=()=>{
    if(counter!==0) setCount((prev)=>prev-1)
  }
  return(
  <>
    <p>{counter}</p>
    <button onClick={handleAdd}>Add</button>
    <button onClick={handleDelete}>Delete</button>
  </>
  )
}

export default Count