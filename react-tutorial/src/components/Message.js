import React, { Component } from 'react'
class Message extends Component{
    constructor(){
        super()
        this.state={
            message:'welcome bruh'
        }
    }
    changeMessage(){
        this.setState({
            message:'thanks for following'
        })
    }
    render(){
        return(<div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>follow</button>
        </div>)

        
    }
}
export default Message