import { useSelector } from "react-redux";
import "../../PostList.css"
import React from 'react'
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
const PostList = () => {
    const posts = useSelector(selectAllPosts);
     //instead of writing state = state.post here we instead export from postSlice as structure os posts changes in postSlice. 
    //So instead we created the selector in the postSlice so even if the structure iof posts changes ,
    //then it will adjusts accordingly and we can import all the newly added properties from posts here, without having to add any additional code on this page.       
   

  const orderedPosts = posts.slice().sort((a,b)=>b.date.localeCompare(a.date)) // this is used for sorting the posted dates in descending order
  //slice returns a shallow copy

    const renderedPosts = orderedPosts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
            <p className="postCredit">
                  <PostAuthor userId={post.userId} />
                  <TimeAgo timestamp={post.date} />
            </p>
        </article>
    ))    


  return (
    
    <section>
        <h2>Posts</h2>
        {renderedPosts}
    </section>
    
  )
}

export default PostList