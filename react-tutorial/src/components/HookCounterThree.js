import React,{useState} from 'react'

function HookCounterThree() {
    const [name,setName]=useState({firstName:'',lastName:''})
  return (
    <div>
        <input type='text' value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}></input>
        <input type='text' value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}></input>
        <h2>firstname:{name.firstName}</h2>
        <h2>lastname:{name.lastName}</h2>
        {/* {JSON.stringify(name)} */}
    </div>
  )
}

export default HookCounterThree