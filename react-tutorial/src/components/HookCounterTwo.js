import React,{useState} from 'react'

function HookCounterTwo() {
    const initialCount=0;
    const[count,setCount]=useState(initialCount)
   const incrementfive=()=>{
        for(let i=0;i<5;i++){
            setCount(prevCount=>prevCount+1)
        }
    }
    return (
    <div>
        Count: {count}
        <button onClick={()=>setCount(initialCount)}>reset</button>
        <button onClick={()=>setCount(prevCount=>prevCount+1)}>increment </button>
        <button onClick={()=>setCount(prevCount=>prevCount-1)}>decrement </button>
        <button onClick={incrementfive}>increment5 </button>
    </div>
  )
}

export default HookCounterTwo