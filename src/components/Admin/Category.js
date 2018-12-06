import React from 'react'
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom'

const Category = ({id, title}) =>
    <div>
        <Link to={`/admin/categories/${id}/podcasts`}>
            <li key={id}>
                {title}
            </li>
        </Link>
    </div>


export default Category
