import React from 'react'
import InstagramPost from '../components/Card';
import ListPosts from '../components/ListPosts';
import ListProjects from '../components/ListProjects';
import PrimarySearchAppBar from '../components/Navbar';
import NewPost from '../components/NewPost';
import Button from '@mui/material/Button';
import { navigate } from '@reach/router';


export const Main = () => {
  var data = JSON.parse(sessionStorage.getItem('user'))
  const handleClick = () => {
    navigate("/add-post")
  }

  return (
    <div>
      <PrimarySearchAppBar/>
      {data?<h2>Welcome <span style={{color:'rgba(176,22,173,1)'}}>{data.user.firstName}</span></h2>:""}
      <Button onClick={handleClick} style={{background: 'rgb(176,22,173)', background: 'linear-gradient(220deg, rgba(176,22,173,1) 0%, rgba(219,4,184,1) 35%, rgba(255,96,0,1) 100%)'}} variant="contained">Add a new post</Button>
       <InstagramPost />
      
       {/* <ListPosts/> */}

    </div>
  )
}
