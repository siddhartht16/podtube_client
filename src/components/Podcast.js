import React from 'react'
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom'

const Podcast = ({podcastId, title}) =>
    <div>
        <Link to={`/podcast/${podcastId}/`}>
            <li key={podcastId}>{title}</li>
        </Link>
    </div>


export default Podcast
