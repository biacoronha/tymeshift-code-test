import React, {Component, useState} from 'react'
import './Card.css'


const Card = (props) => (

    <div className="items" onClick={() => props.handleClick(props.location.id)}>
        <p>
            <span className="name">{props.location.name}</span>
            <span className="users">{props.location.userCount}</span>
            <span className="created">{props.location.createdAt}</span>
            <span className="views">{props.location.views}</span>
        </p>
        {
            
        }
    </div>

)

export default Card