import React, { useState } from 'react'
import './Header.css'
import PinterestIcon from '@material-ui/icons/Pinterest';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TextsmsIcon from '@material-ui/icons/Textsms';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Search } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import { useRecoilState } from 'recoil';
import { nextState, queryState } from './recoil/next';

function Header({apicall}) {

    const[input, setInput] = useState('');
    const[next, setNext] = useRecoilState(nextState);
    const[query, setQuery] = useRecoilState(queryState);

    const onSearchSubmit = e => {
        e.preventDefault();
        setQuery(input)
        setNext(null);
        apicall(input);
    }

    return (
        <div className="header">
            <div className="header__wrapper">
                <div className="header__logo">
                    <PinterestIcon fontSize="large" style={{ color: "red" }} />
                </div>
                <div className="header__home">
                    <IconButton style={{ color: "white" }} size="small" disableRipple disableFocusRipple>
                        Home
                    </IconButton>
                </div>
                <div className="header__today">
                    <IconButton style={{ color: "black" }} size="small" disableRipple disableFocusRipple>
                        Today
                    </IconButton>
                </div>
                <div className="header__following">
                    <IconButton style={{ color: "black" }} size="small" disableRipple disableFocusRipple>
                        Following
                    </IconButton>
                </div>
                <div className="header__search">
                        <Search className="header__searchIcon" />
                        <form className="header__searchForm" onSubmit={onSearchSubmit}>
                            <input type="text" className="header__searchText" placeholder="Search" value={input} onChange={e=>setInput(e.target.value)} />
                        </form>
                </div>
                <div className="header__menu">
                    <IconButton>
                        <NotificationsIcon />
                    </IconButton>
                    <IconButton>
                        <TextsmsIcon />
                    </IconButton>
                    <IconButton>
                        <Avatar />
                    </IconButton>
                    <IconButton>
                        <KeyboardArrowDownIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Header
