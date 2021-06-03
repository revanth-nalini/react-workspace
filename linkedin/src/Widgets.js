import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FibreManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {

    const newsArticle = (heading,subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FibreManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
              <div className="widgets__header">
                  <h2>Linkedin News</h2>
                  <InfoIcon />
              </div>
              {newsArticle("Popular Jobs", "Top news - 1000 readers")}
              {newsArticle("Covid Updates", "Top news - 800 readers")}
              {newsArticle("Tesla Stocks", "Cars & Auto - 800 readers")}
              {newsArticle("Bitcoin Breaks $22k", "Crypto - 800 readers")}
        </div>
    )
}

export default Widgets
