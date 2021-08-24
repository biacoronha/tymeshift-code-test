import React from 'react'

const SectionAbout = (props) => (
    <p>
        <span className="users">{props.location.userCount}</span>
        <span className="created">{props.location.createdAt}</span>
        <span className="views">{props.location.views}</span>
    </p>
)

export default SectionAbout