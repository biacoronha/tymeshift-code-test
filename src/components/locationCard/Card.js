import React, {Component, useState} from 'react'
import SectionAbout from '../modal/SectionAbout'
import './Card.css'


const Card = (props) => (

    <div className="items" onClick={() => props.handleClick(props.location.id)}>
            <h6 className="name">{props.location.name}</h6>
            <SectionAbout location={props.location}/>
    </div>

)

export default Card