import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <img src="https://cdn-images-1.medium.com/max/1200/1*d7fYAnWUS9rDntWGdABxPw.png" />
            </div>
            <div className="header__search">
                <div className="header__searchContainer">
                    <SearchIcon />
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className="header__menuItems">
                <a href="#">Free Stock</a>
                <a href="#">Portfolio</a>
                <a href="#">Cash</a>
                <a href="#">Messages</a>
                <a href="#">Account</a>
            </div>
        </div>
    )
}

export default Header
