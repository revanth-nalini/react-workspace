import React, { useState } from 'react'
import './Newsfeed.css'
import LineGraph from './LineGraph'
import TimeLine from './TimeLine'
import { Avatar, Chip } from '@material-ui/core';

function Newsfeed() {

    const [popularTopics, setTopics] = useState([
        "Technology",
        "Top Movies",
        "Upcoming Earnings",
        "Crypto",
        "Healthcare Supplies",
        "Index ETFs",
        "Technology",
        "Pharma",
      ]);

    return (
        <div className="newsfeed">
            <div className="newsfeed__container">
                <div className="newsfeed__chartSection">
                    <div className="newsfeed__portfolio">
                        <h1>$100,999</h1>
                        <p>+50.64 (+0.04%) Today</p>
                    </div>
                    <div className="newsfeed__chart">
                        <LineGraph />
                        <TimeLine />
                    </div>
                </div>
                <div className="newsfeed__buyingPower">
                    <h2>Buying Power</h2>
                    <h2>$ 4.11</h2>
                </div>
                <div className="newsfeed__marketSection">
                    <div className="newsfeed__marketBox">
                        <p>Markets Closed</p>
                        <h1>Happy NewYear</h1>
                    </div>
                </div>
                <div className="newsfeed__popularList">
                    <div className="newsfeed__popularHeading">
                        <h1>Popular List</h1>
                        <p>Show More</p>
                    </div>
                    <div className="newsfeed__popularBadges">
                        {
                            popularTopics.map((topic)=>(
                                <Chip 
                                    size="medium'"
                                    className="newsfeed__topic"
                                    variant="outlined"
                                    label={topic}
                                    avatar={<Avatar src={`https://avatars.dicebear.com/api/human/${topic}.svg`} />}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsfeed
