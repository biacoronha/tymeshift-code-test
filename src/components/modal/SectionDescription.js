import React from 'react'

const SectionDescription = (props) => (
    <p>
        <span className="description-title">Description</span>
        <span className="description">{props.location.description}</span>
    </p>
)

export default SectionDescription