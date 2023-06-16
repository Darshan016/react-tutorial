import React, { Component } from 'react'
import Child from './Child'

 class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'parent component'
      }
      this.greet=this.greet.bind(this)
    }
    greet(childName){
        alert(`hello ${this.state.parentName} from ${childName}`)
    }
  render() {
    return (
      <div>
        <Child greetHandler={this.greet}/>
      </div>
    )
  }
}

export default Parent