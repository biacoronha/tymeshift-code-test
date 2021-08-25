import React from 'react'
import './SectionDescription.css'

const SectionDescription = (props) => (
    <ul>
        <li>
            <span className="description-title">Description</span>
        </li>
        <li>
            <span className="description">{props.location.description}</span>
        </li>
    </ul>
)

export default SectionDescription