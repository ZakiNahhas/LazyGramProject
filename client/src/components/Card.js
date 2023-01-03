/* eslint-disable jsx-a11y/anchor-is-valid */
// import * as React from 'react';
import axios from 'axios';
import moment from 'moment';
import { navigate } from '@reach/router';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Link from '@mui/joy/Link';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlined from '@mui/icons-material/ModeCommentOutlined';
import SendOutlined from '@mui/icons-material/SendOutlined';
import Face from '@mui/icons-material/Face';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';

import React, { useEffect, useState } from 'react'


export default function InstagramPost() {
  const [posts, setPosts] = useState([]);
  const [flag, setFlag] = useState(0);
  const [clickComt, setClickComt] = useState(false)
  const [Comments, setComments] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [loaded1, setLoaded1] = useState(false);
  const [postid, setPostId] = useState('');
  const [comment, setComment] = useState('');
  const [user_id, setUserId] = useState('');
  var data = JSON.parse(sessionStorage.getItem('user'))

  const handleLike = (e) => {
    
    for (let i = 0; i < data.user.postlike.length; i++) {
      if (e === data.user.postlike[i]) {
        setFlag(1)
      }
    }
    if (flag ===1) {
      axios.put('http://localhost:8000/api/Post/' + e._id, { 'like': e.like - 1 })
      console.log("it's found")
      console.log("it's found")
      data.user.postlike.pull(e)
    }else { 
      // axios.put('http://localhost:8000/api/user/' + e._id, { 'postlike': [...data.user.postlike,e] })
      axios.put('http://localhost:8000/api/Post/' + e._id, { 'like': e.like + 1 })
      console.log("it's not found")
      data.user.postlike.push(e)
      console.log(data.user.postlike)
      console.log(data.user.postlike.length)
      }
    
        
        } 
    // if(data.user.liked){
    //   axios.put('http://localhost:8000/api/user/' + data.user._id, { 'liked': true})
    
    //     .then(console.log(data.user.liked))
        
    //  }
    //   else{axios.put('http://localhost:8000/api/user/' + data.user._id, { 'liked': false})
        
    //     .then(console.log(data.user.liked))
    //     } 




  useEffect(() => {
    axios.get('http://localhost:8000/api/Posts')
      .then(res => setPosts(res.data));
    setLoaded(true)
  }, [posts])
  useEffect(() => {
    axios.get('http://localhost:8000/api/Comment')
      .then(res => setComments(res.data));

    setLoaded1(true)
  }, [Comments])
  const handleSubmit = (post_idx) => (e) => {
    e.preventDefault();
    console.log(post_idx)


    var data = JSON.parse(sessionStorage.getItem('user'))
    { JSON.stringify(posts) }
    axios.post('http://localhost:8000/api/Comment/', {
      comment,
      'post_id': post_idx,
      'user_id': data.user._id
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    console.log("Welocme " + data.user._id)

  }

  const clicktoshow = (post) => {

    axios.put('http://localhost:8000/api/Post/' + post._id, { "showCommand": post.showCommand ? 'false' : 'true' })
      .then(res => {
        console.log(res)
      })
  }
  const profile =(e) => {
    navigate('/profile/'+e)
  }
  return (
    <div>

      {loaded && posts.map((post, idx) => {
        return (
          <>
            <Card
              variant="outlined"
              sx={{
                width: '45%',
                margin: '0 auto',
                '--Card-radius': (theme) => theme.vars.radius.xs,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', pb: 1.5, gap: 1 }}>
                <Box
                  sx={{
                    position: 'relative',
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      m: '-2px',
                      borderRadius: '50%',
                      background:
                        'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
                    },
                  }}
                >
                  <Avatar
                    size="sm"
                    src="/static/logo.png"
                    sx={{ p: 0.5, border: '2px solid', borderColor: 'background.body' }}  onClick={()=>profile(post.user_id._id)}
                  />
                </Box>
                <Typography onClick={()=>profile(post.user_id._id)} fontWeight="lg">{post.user_id.firstName}</Typography>
                <IconButton variant="plain" color="neutral" size="sm" sx={{ ml: 'auto' }}>
                  <p>...</p>
                </IconButton>
              </Box>
              <CardOverflow>
                <AspectRatio>
                  <img src={`http://localhost:8000/${post.photo}`} alt="" loading="lazy" style={{ width: '80%', marginLeft: '10%' }} />
                </AspectRatio>
              </CardOverflow>
              <Box sx={{ display: 'flex', alignItems: 'center', mx: -1, my: 1 }}>
                <Box sx={{ width: 0, display: 'flex', gap: 0.5 }}>
                <IconButton variant="plain" color="neutral" size="sm" onClick={() => handleLike(post)} >
            {post.liked?<FavoriteBorder color='error' style={{backgroundColor:post.liked}}  />:
            <FavoriteBorder style={{backgroundColor:post.liked}}  />}
          </IconButton>
                  <IconButton variant="plain" color="neutral" size="sm">
                    <ModeCommentOutlined onClick={(e) => clicktoshow(post)} />
                  </IconButton>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mx: 'auto' }}>
                  {[...Array(5)].map((_, index) => (
                    <Box
                      key={index}
                      sx={{
                        borderRadius: '50%',
                        width: `max(${6 - index}px, 3px)`,
                        height: `max(${6 - index}px, 3px)`,
                        bgcolor: index === 0 ? 'primary.solidBg' : 'background.level3',
                      }}
                    />
                  ))}
                </Box>
                <Box sx={{ width: 0, display: 'flex', flexDirection: 'row-reverse' }}>
                </Box>
              </Box>
              <Link
                component="button"
                underline="none"
                fontSize="sm"
                fontWeight="lg"
                textColor="text.primary"
              >
                        <p style={{marginRight:'32.5em'}}>{post.like} <span style={{color:'#d32f2f'}}>Likes</span>  </p>

              </Link>
              <Typography fontSize="sm">
                <Link
                  component="button"
                  color="neutral"
                  fontWeight="lg"
                  textColor="text.primary"
                >

                </Link>{' '}
                says {post.content}
              </Typography>

              {post.showCommand == true ? <>
                {loaded1 && Comments.map((comment, idx) => {
                  return (
                    <div>
                      {comment.post_id == post._id ?
                        <>

                          <p>{comment.user_id.firstName} say</p> <p>{comment.comment}</p></> : ''}
                    </div>
                  )
                })}</> : ''
              }
              <Link
                component="button"
                underline="none"
                fontSize="10px"
                sx={{ color: 'text.tertiary', my: 0.5 }}
              >
                <p>{moment(post.createdAt).format("DD/MM/YYYY")}</p>
              </Link>
              <CardOverflow sx={{ p: 'var(--Card-padding)', display: 'flex' }}>
                <IconButton size="sm" variant="plain" color="neutral" sx={{ ml: -1 }}>
                  <Face />
                </IconButton>

                <form onSubmit={handleSubmit(posts[idx]._id)}>



                  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Input
                      type="text"
                      placeholder="comment"
                      name="comment"
                      onChange={((e) => setComment(e.target.value))}

                      variant="plain"
                      size="sm"
                      // placeholder = 'Add a comment…'
                      sx={{ flexGrow: 1, mr: 1, '--Input-focusedThickness': '0px' }}
                    />

                    <input type="hidden" name="post_id" value={post._id} onChange={(e) => setPostId(e.target.value)} />
                    <input
                      type="submit" value="Post" style={{ color: 'blue', backgroundColor: 'white', border: "0px" }}
                    />
                  </div>
                  {/* <Link underline="none" role="button" type="submit">
          Post
        </Link> */}
                </form>

              </CardOverflow>

            </Card>
            <br></br>
          </>
        );
      })
      }
    </div>
  )

}
