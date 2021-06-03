import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './Sidebar.css'

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) =>(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
              <img src="https://miro.medium.com/max/1124/1*92adf06PCF91kCYu1nPLQg.jpeg" alt="" />
              <Avatar src="user.photoUrl" alt={user.email[0]} className="sidebar__avatar" />
              <h2>{user.displayName}</h2>
              <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,500</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,500</p>
                </div>
                <div className="sidebar__bottom">
                    <p>Recent</p>
                    {recentItem('reactjs')}
                    {recentItem('programming')}
                    {recentItem('software engineering')}
                    {recentItem('design')}
                    {recentItem('developer')}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
