import React, { Component } from 'react'

 class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        showname:'',
        character:''
         
      }
    }
    handleUserName=event=>{
        this.setState({
            showname:event.target.value
        })
    }
    handleShow=event=>{
        this.setState({
            character:event.target.value
        })
    }
    handleSubmit=event=>{
        alert(`${this.state.showname} and ${this.state.character}`)
        event.preventDefault()
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label>show name</label>
            <input type="text" value={this.state.showname} onChange={this.handleUserName} />
            <br/>
            <label>character name</label>
            <input type='text' value={this.state.character} onChange={this.handleShow} />
            <br />
            <button type='submit'>submit</button>
        </form>
      </div>
    )
  }
}

export default Form