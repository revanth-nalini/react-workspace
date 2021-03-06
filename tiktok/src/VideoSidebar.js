import React, { useState } from 'react'
import './VideoSidebar.css'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import MessageIcon from '@material-ui/icons/Message'
import ShareIcon from '@material-ui/icons/Share'

function VideoSidebar({ likes,shares,messages }) {

    const[liked, setLinked] = useState(false);

    return (
        <div className="videoSidebar">
            <div className="VideoSidebar__button">
                {
                    liked ? (
                        <FavoriteIcon fontSize="large" onClick={e=>setLinked(false)} />
                     ) : (
                        <FavoriteBorderIcon fontSize="large" onClick={e=>setLinked(true)}/>
                     )
                }
                <p>{liked ? likes+1 : likes}</p>
            </div>
            <div className="VideoSidebar__button">
                <MessageIcon fontSize="large" />
                <p>{messages}</p>
            </div>
            <div className="VideoSidebar__button">
                <ShareIcon fontSize="large" />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar
