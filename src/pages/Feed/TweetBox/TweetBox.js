import React, { useState } from "react";
import { Avatar, Button } from "@mui/material";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

import { useAuthState } from "react-firebase-hooks/auth";

import axios from 'axios'
import './TweetBox.css';
import useLoggedInUser from "../../../hooks/useLoggedInUser";
import auth from "../../../firebase.init";


const TweetBox = () => {
    const [post, setPost]= useState('');
    const [imageURL,setImageURL]=useState('');
    const [isLoading,setIsLoading]=useState('');
    const [username,setUsername]=useState('');
    const [name,setName]=useState('');
    const [loggedInUser] = useLoggedInUser();
    const [user] = useAuthState(auth)
    const email = user?.email;

    const userProfilePic = loggedInUser[0]?.profileImage?loggedInUser[0]?.profileImage:"https://api.imgbb.com/1/upload?key=b39e03eefdbf58da1bf50c483e79d0b3"

    const handleUploadImage = (e) => {
        setIsLoading(true);
        const image = e.target.files[0];
        
        const formData = new FormData();
        formData.set('image', image)

        axios.post('https://api.imgbb.com/1/upload?key=b39e03eefdbf58da1bf50c483e79d0b3', formData)
            .then(res => {
                setImageURL(res.data.data.display_url)
                console.log(res.data.data.display_url)
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            })
    }

    const handleTweet = (e) => {
        e.preventDefault();
        if(user.providerData[0].providerId ==='password'){
            fetch(`https://twitterbackend-xen3.onrender.com/loggedInUser?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setName(data[0]?.name)
                setUsername(data[0]?.username)
            })
        }
        else{
            setName(user?.displayName)
            setUsername(email?.split('@')[0])
        }
        if(name){
        const userPost = {
            profilePhoto : userProfilePic,
            post: post,
            photo: imageURL,
            username : username,
            name : name,
            email :email
        }
        // console.log(userPost);
        setPost(' ');
        setImageURL(' ');
        fetch(`https://twitterbackend-xen3.onrender.com/post`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userPost)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        }
    }
    return (
        <div className="tweetBox">
            <form onSubmit={handleTweet}>
                <div className="tweetBox_input">
                <Avatar src={userProfilePic} />
                    <input type='text'
                    placeholder="What's happening?"
                    onChange={(e) => setPost(e.target.value)}
                    value={post}
                    required
                    ></input>
                </div>
                <div className="imageIcon_tweetBox">
                    <label htmlFor="image" className="imageIcon">
                        {
                             isLoading ? <p>Uploading image</p> : <p>{imageURL ? 'image uploaded' : <AddPhotoAlternateIcon /> }</p>
                        }
                    </label>
                    <input type="file" id='image' className="imageInput" onChange={handleUploadImage}/>
                    <Button className="tweetBox_tweetButton" type="submit">Tweet</Button>
                </div>
            </form>
        </div>
    )
}

export default TweetBox;