import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline"
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'
import { Grid, Slider } from '@material-ui/core'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'


function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img src="https://images-na.ssl-images-amazon.com/images/I/812FwTlCCEL._SL1500_.jpg" alt="" className="footer__albumLogo"></img>
                <div className="footer__songInfo">
                    <h4>Love Me Like You Do</h4>
                    <p>Ellie Goulding</p>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>
            <div className="footer__right">
                   <Grid container spacing={2}>
                       <Grid item>
                           <PlaylistPlayIcon />
                       </Grid>
                       <Grid item>
                           <VolumeDownIcon />
                       </Grid>
                       <Grid item xs>
                           <Slider aria-labelledby="continuous-slider"></Slider>
                       </Grid>
                   </Grid>
            </div>
        </div>
    )
}

export default Footer