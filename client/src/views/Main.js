import React from 'react'
import ListPosts from '../components/ListPosts';
import ListProjects from '../components/ListProjects';
import NewPost from '../components/NewPost';

export const Main = () => {
  var data = JSON.parse(sessionStorage.getItem('user'))

  return (
    <div>
      {data?<h2>Welcome {data.user.firstName}</h2>:""}
      <h1>LazyGram</h1>
       <NewPost/>
       
       <ListPosts/>

    </div>
  )
}
