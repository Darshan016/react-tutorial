import React, { Component } from 'react'

  class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'ohayo'
      }
      this.changeMessage=this.changeMessage.bind(this)
    }
    changeMessage(){
        this.setState({
            message:'oyasumi'
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.changeMessage}>change text</button>
      </div>
    )
  }
}
export default EventBind