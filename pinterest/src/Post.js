import React from 'react'
import './Post.css'

const Post = ({imageURL, description}) => {
    return (
        <div className="post" >
            <img src={imageURL?.small} alt="" />
            <div className="post__desc">
                <h6>{description}</h6>
            </div>
        </div>
    )
}

// width calc(12/var(--g-ncols)*100%

export default Post
