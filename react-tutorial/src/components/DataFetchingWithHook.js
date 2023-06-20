import React, {useState,useEffect} from 'react'
import axios from 'axios'
function DataFetchingWithHook() {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res=>{console.log(res);setPosts(res.data)}).catch(err=>console.log(err))
    },[])
  return (
    <div>
        <ul>
            {
                posts.map(post=>(<p key={post.id}>{post.body}</p>))
            }
        </ul>
    </div>
  )
}

export default DataFetchingWithHook