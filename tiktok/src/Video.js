import React, { useRef, useState } from 'react'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'
import VideoHeader from './VideoHeader'
import './Video.css'

function Video({ url,channel,description,song,likes,messages,shares }) {

    const videoRef = useRef(null);
    const [playing,setPlaying] = useState(false);

    const onVideoPress = () => {
        if(playing){
            videoRef.current.pause();    
            setPlaying(false);
        } else{
            videoRef.current.play();
            setPlaying(true);
        }
    }

    return (
        <div className="video">
            <VideoHeader />
            <video className="video__player" ref={videoRef} onClick={onVideoPress} loop src={url}></video> {/*use controls to access play pause button*/}
            <VideoFooter channel={channel} description={description} song={song} />
            <VideoSidebar likes={likes} messages={messages} shares={shares} />
        </div>
    )
    
}

export default Video
