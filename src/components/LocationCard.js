import React, {Component, useState} from 'react'
import SectionAbout from './locationInfo/SectionAbout'
import './LocationCard.css'


const LocationCard = (props) => (

    <div className="items" onClick={() => props.handleClick(props.location.id)}>
            <h6 className="name">{props.location.name}</h6>
            <SectionAbout location={props.location}/>
    </div>

)

export default LocationCard