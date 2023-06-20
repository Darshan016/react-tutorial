import React, {useState,useEffect} from 'react'

function HookCounterUseEffect() {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        document.title=`${count}`
    })
    return (
    <div>
        <button onClick={()=>setCount(count+1)}>count is: {count}</button>
    </div>
  )
}

export default HookCounterUseEffect