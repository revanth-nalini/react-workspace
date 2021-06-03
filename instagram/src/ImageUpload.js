import React, { useState } from 'react'
import {Button} from '@material-ui/core'
import './ImageUpload.css'
import { storage, db } from './firebase'
import firebase from "firebase"

function Imageupload({username}) {

    const [caption,setCaption] = useState(null);
    const [progress,setProgress] = useState(0);
    const [image,setImage] = useState('');

    const handleChange = (e) => {
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    }

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => { 
                const progress = Math.round(    // Progress Function
                   (snapshot.bytesTransferred/snapshot.totalBytes) * 100
                )
                setProgress(progress);
            },
            (error) => {
                alert(error.message);   // Error Function
            },
            ()=>{
                storage.ref('images')    // Error Function
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    db.collection("posts").add({
                      timestamp : firebase.firestore.FieldValue.serverTimestamp(),
                      caption : caption,
                      imageUrl : url,
                      username: username
                    })
                    setProgress(0);
                    setCaption("");
                    setImage(null);
                });
            }
        )
    }

    return (
        <div className="imageUpload">
            <progress className="imageUpload__progress" value={progress} max="100" />
            <input type="text" placeholder="Enter a caption" onChange={event => setCaption(event.target.value)} value={caption} />
            <input type="file" onChange={handleChange} />
            <Button className="imageupload__button" onClick={handleUpload}>
                Upload
            </Button>
        </div>
    )
}

export default Imageupload
