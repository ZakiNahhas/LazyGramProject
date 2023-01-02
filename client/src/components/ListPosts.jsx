import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ListPosts = () => {
  const [posts, setPosts] = useState([]);
  const [Comments, setComments] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [loaded1, setLoaded1] = useState(false);
  const [postid, setPostId] = useState('');
  const [comment, setComment] = useState('');
  const [user_id, setUserId] = useState('');
  var data = JSON.parse(sessionStorage.getItem('user'))

  useEffect(() => {
    axios.get('http://localhost:8000/api/Posts')
      .then(res => setPosts(res.data));
    setLoaded(true)
  }, [posts])
  useEffect(() => {
    axios.get('http://localhost:8000/api/Comment')
      .then(res => setComments(res.data));

    setLoaded1(true)
    console.log("sdzfz" + Comments)
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


  return (
    <div>

      {loaded && posts.map((post, idx) => {
        return (
          <>


            <div style={{ border: '2px solid black ', width: '27%', marginLeft: '40%', marginTop: '2%' }}>
              <p>{post.user_id.firstName}</p>
              <div><img src={`http://localhost:8000/${post.photo}`} alt="ss" width="100%" height="100%"></img></div>
              <div>{post.content}</div>

              {loaded1 && Comments.map((comment, idx) => {
         return (
        <div>
          
          {comment.post_id==post._id?<><p>{comment.user_id.firstName} say</p> <p>{comment.comment}</p></>:''}
        </div>
         )
      })
      }
              <form onSubmit={handleSubmit(posts[idx]._id)}>


                <input
                  type="text"
                  placeholder="comment"
                  name="comment"
                  onChange={((e) => setComment(e.target.value))}


                />
                <input type="hidden" name="post_id" value={post._id} onChange={(e) => setPostId(e.target.value)} />
                <input
                  type="submit"
                />
              </form>
            </div>

          </>
        )
      })}

      
    </div>
  )
}

export default ListPosts