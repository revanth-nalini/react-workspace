import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from '@material-ui/icons/Forum'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { Link, useHistory } from 'react-router-dom'

function Header({ backButton }) {

    const history = useHistory();   // session browser history

    return (
        <div className="header">
            {
                backButton ? (
                    <IconButton onClick={()=>history.replace(backButton)}>
                        <ArrowBackIosIcon className="header__icon"  fontSize="large" />
                    </IconButton>
                ) : 
                (
                    <IconButton>
                        <PersonIcon className="header__icon" fontSize="large" />
                    </IconButton>
                )
            }

            <Link to="/">
                <img className="header__logo" src="data:image/png;base64,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" alt="tinder logo"/>
            </Link>
            <Link to="/chat">
                <IconButton>
                    <ForumIcon className="header__icon" fontSize="large" />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header
