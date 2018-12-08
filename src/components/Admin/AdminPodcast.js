import React from 'react'
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom'

const AdminPodcast = ({id, title}) =>
    <div>
        <Link to={`/admin/podcasts/${id}/episodes`}>
            <li key={id}>
                {title}
            </li>
        </Link>
    </div>


export default AdminPodcast
