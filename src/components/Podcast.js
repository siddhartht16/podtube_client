import React from 'react'
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom'

const Podcast = ({podcastId, title}) =>
    <div>
        <li key={podcastId}>
            <Link to={`/podcast/${podcastId}/`}>{title}</Link>
        </li>
    </div>


export default Podcast
