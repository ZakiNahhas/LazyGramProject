import React from 'react'
import InstagramPost from '../components/Card';
import ListPosts from '../components/ListPosts';
import ListProjects from '../components/ListProjects';
import PrimarySearchAppBar from '../components/Navbar';
import NewPost from '../components/NewPost';

export const Main = () => {
  var data = JSON.parse(sessionStorage.getItem('user'))

  return (
    <div>
      <PrimarySearchAppBar/>
      {data?<h2>Welcome {data.user.firstName}</h2>:""}
       <NewPost/>
       <InstagramPost />
       {/* <ListPosts/> */}

    </div>
  )
}
