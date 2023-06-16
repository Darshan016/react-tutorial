import React, { Component } from 'react'

 class GreetUser extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn:false
         
      }
    }
  render() {
    return (
      this.state.isLoggedIn?
      <div>welcome bruh</div>:
      <div>welcome user</div>
      
    )
  }
}

export default GreetUser