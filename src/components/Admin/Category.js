import React from 'react'
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom'

const Category = ({id, title}) =>
    <div>
        <li key={id}>
            <Link to={`/admin/categories/${id}/podcasts`}>{title} </Link>
        </li>
    </div>;


export default Category
