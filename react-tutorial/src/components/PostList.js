import React, { Component } from 'react'
import axios from 'axios'
 class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(response=>{console.log(response)
        this.setState({posts:response.data})})
        .catch(error=>{console.log(error)})
    }
  render() {
    const {posts}=this.state
    return (
      <div>PostList
        {
            posts.length?
            posts.map(data=><div key={posts.id}>{data.title}</div>):
            null
        }
      </div>
    )
  }
}

export default PostList