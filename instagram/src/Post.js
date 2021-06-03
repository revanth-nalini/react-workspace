import React, { useEffect, useState } from 'react'
import './Post.css'
import Avatar from "@material-ui/core/Avatar"
import { db } from './firebase'
import firebase from 'firebase'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SendIcon from '@material-ui/icons/Send';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Post({ postId, user, username, caption, imageUrl }) {

    const [comments,setComments] = useState([]);
    const [comment,setComment] = useState('');

    const postComment = (event) =>{
        event.preventDefault();
        db.collection('posts').doc(postId)
        .collection('comments').add({
            text : comment,
            username : user.displayName,
            timestamp : firebase.firestore.FieldValue.serverTimestamp()
        })
        setComment('');
    }
    
    useEffect(()=>{
          let unsubscribe;
          if(postId){
            unsubscribe = db
            .collection('posts')
            .doc(postId)
            .collection('comments')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => {
                setComments(snapshot.docs.map((doc)=>doc.data()))
            });
          } 
        return ()=>{
          unsubscribe(); 
        }
      },[postId]);

    return (
        <div className="post">
            <div className="post__header">
                <div className="post__headerLeft">
                    <Avatar className="post__avatar" alt = "Revanth" 
                    src = "/static/images/avatar/1.jpg" />
                    <h3>{username}</h3>
                </div>
                <div className="post__headerRight">
                    <MoreHorizIcon />
                </div>
            </div>
            <img className="post__image" src={imageUrl} />
            <div className="post__icon">
                <div className="post__iconLeft">
                    <FavoriteIcon color="error" />
                    <ChatBubbleOutlineIcon />
                    <SendIcon />
                </div>
                <div className="post__iconRight">
                    <BookmarkBorderIcon />
                </div>
            </div>
            <h4 className="post__text"><strong>{username} : </strong>{caption}</h4>
            <div className="post__comments">
                {
                    comments.map((comment)=>(
                        <p>
                            <strong>{comment.username}</strong> : {comment.text}
                        </p>
                    ))
                }
            </div>
            {user && (
                <form className="post__commentBox">
                    <input 
                        className="post__input" 
                        type="text"
                        placeholder="Add a comment"
                        value={comment}
                        onChange={(e)=>setComment(e.target.value)}
                    />
                    <button
                        className="post__button"
                        disabled={!comment}
                        type="submit"
                        onClick={postComment}
                    >Post</button>
                </form>
            )}
        </div>
    )
}

export default Post
