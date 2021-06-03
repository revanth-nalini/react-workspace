import React from 'react'
import './Card.css'

function Card({ source,title,location,description,price }) {
    return (
        <div className="card">
            <img src={source} alt="" />
            <div className="card__info">
                <h2>{title}</h2>
                <p>{location}</p>
                <div><h4>{description}</h4></div>
                <h3>{price}</h3>
            </div>
        </div>
    )
}

export default Card
