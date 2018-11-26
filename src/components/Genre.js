import React from 'react'
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom'

const Genre = ({id, name}) =>
    <div>
        <Link to={`/genre/${id}/`}>
            <li key={id}>{name}</li>
        </Link>
    </div>


export default Genre
