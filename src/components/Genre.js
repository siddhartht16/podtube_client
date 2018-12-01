import React from 'react'
import PodcastIcon from '../assests/podcast-icon.png';
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom'

const Genre = ({id, name}) =>
    <div>
        <Link to={`/genre/${id}/`}>
            <li key={id}>
                <img src={PodcastIcon} className="genre-img"/>
                <span className="genre-text">{name}</span>
            </li>
        </Link>
    </div>


export default Genre
