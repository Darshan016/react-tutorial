import React from 'react'

function NameList() {
    const names=['zero two','nino','yukino','ichika']
    const list=names.map(name=><h2>{name}</h2>)
  return (
    <div>
        {
            list
        }
    </div>
  )
}

export default NameList