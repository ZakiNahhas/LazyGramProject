import React, { useState } from 'react';
import axios from 'axios';

const NewPost = () => {
    const [newPost, setnewPost] = useState(
        {
            content: '',
            user_id: '',
            photo: '',
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        // localStorage.setItem('user',JSON.stringify(json))
          
            var data = JSON.parse(sessionStorage.getItem('user'))
            console.log(data.user._id)
        const formData = new FormData();
        formData.append('photo', newPost.photo);
        formData.append('user_id', data.user._id);
        formData.append('content', newPost.content);

        axios.post('http://localhost:8000/api/Post/', formData)
             .then(res => {
                console.log(res);
             })
             .catch(err => {
                console.log(err);
             });
    }

    const handleChange = (e) => {
        setnewPost({...newPost, [e.target.name]: e.target.value});
    }

    const handlePhoto = (e) => {
        setnewPost({...newPost, photo: e.target.files[0]});
    }

    return (
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <input 
                type="file" 
                accept=".png, .jpg, .jpeg"
                name="photo"
                onChange={handlePhoto}
            />

            <input 
                type="text"
                placeholder="content"
                name="content"
                value={newPost.content}
                onChange={handleChange}
            />


            <input 
                type="submit"
            />
        </form>
    );
}

export default NewPost;