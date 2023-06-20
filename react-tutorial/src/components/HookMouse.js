import React, {useState,useEffect} from 'react'

function HookMouse() {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)
    useEffect(()=>{
        console.log(`useEffect`)
        window.addEventListener('mousemove',logPosition)
    },[])
    const logPosition = e=>{
        console.log('mouse')
        setX(e.clientX)
        setY(e.clientY)

    }
  return (
    <div>
        Mouse Cordinates: X = {x} Y = {y}
    </div>
  )
}

export default HookMouse