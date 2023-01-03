import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PrimarySearchAppBar from '../components/Navbar';

const Profile = (props) => {
    const [counter, setCounter] = useState(0);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [follower, setfollower] = useState([]);
    // const [, setfollower] = useState([]);
    const [following, setfollowing] = useState([]);
    const [isClicked, setIsClicked] = useState(false);

    const [id, setId] = useState('');

    const [posts, setPosts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    var data = JSON.parse(sessionStorage.getItem('user'))

    useEffect(() => {
        axios.get('http://localhost:8000/api/user/' + props.id)
            .then(res => {
                setId(res.data._id)
                setFirstName(res.data.firstName);
                setfollower(res.data.followers);
                setfollowing(res.data.following);

                setLastName(res.data.lastName);
                setEmail(res.data.email);
            })
    }, []);

    useEffect(() => {
        axios.get('http://localhost:8000/api/Posts')
            .then(res => setPosts(res.data));
        setLoaded(true)
    }, [posts])

    const follow = () => {
        fetch('http://localhost:8000/api/follow/' + data.user._id, {
            method: "put",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify({
                followId: id
            })
        }).then(res => {
            res.json()

            setfollower([...follower, id])
            setIsClicked(true)
        })

    }
    const unfollow = () => {
        fetch('http://localhost:8000/api/unfollow/' + data.user._id, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                unfollowId: id
            })
        }).then(res => {
            res.json()
            setfollower(follower.filter(id => follower != id))
            setIsClicked(false)
            



        })

    }
    return (
        <>
            <PrimarySearchAppBar />

            <div style={{ maxWidth: "550px", margin: "0px auto" }}>
                <div style={{
                    display: "flex",
                    justifyContent: "space-around",
                    margin: "18px 0px",
                    borderBottom: "1px solid grey"
                }}>
                    <div>
                        <img style={{ width: "160px", height: "160px", borderRadius: "80px" }}
                            src=""
                        />
                    </div>
                    <div>
                        <h4>{firstName} {lastName}</h4>
                        <h5>{email}</h5>
                        <div style={{ display: "flex", justifyContent: "space-between", width: "108%" }}>
                            <h6>{counter} posts</h6>
                            <h6>{follower.length} followers</h6>
                            <h6>{following.length} following</h6>
                        </div>

                        {id !== data.user._id ?
                            <>
                                {!isClicked ?

                                    <button style={{
                                        margin: "10px"
                                    }} className="btn waves-effect waves-light #64b5f6 blue darken-1"
                                        onClick={() => follow()}
                                    >
                                        Follow
                                    </button>
                                    :
                                    <button
                                        style={{
                                            margin: "10px"
                                        }}
                                        className="btn waves-effect waves-light #64b5f6 blue darken-1"
                                        onClick={() => unfollow()}
                                    >
                                        UnFollow
                                    </button>
                                }
                            </>
                            : ""}



                    </div>
                </div>


                <div className="gallery">
                    {
                        loaded && posts.map(item => {
                            
                            return (
                                item.user_id._id === id ? <>
                                    <img key={item._id} className="item" src={`http://localhost:8000/${item.photo}`} alt="title" /> </> :  ""


                            )
                        })
                    }


                </div>
            </div>



        </>
    )
}


export default Profile