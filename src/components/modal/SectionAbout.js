import React from 'react'
import './SectionAbout.css'

const SectionAbout = (props) => (
    <ul>
        <li>
        <i className="icon-users"></i>
            <span className="users">{props.location.userCount} Users</span>
        </li>
        <li>
        <i className="icon-createdAt"></i>
            <span className="createdAt">{props.location.createdAt}</span>
        </li>
        <li>
        <i className="icon-views"></i>
            <span className="views">{props.location.views} Views</span>
        </li>
    </ul>
)

export default SectionAbout