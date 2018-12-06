import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom'
export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
               <h2 className="text-center">Welcome To PodTube Admin</h2>
                <h4>Statistics</h4>
                <p>Users: </p>
                <p>Categories: </p>
                <p>Poscasts: </p>
                <p>Episodes: </p>
                <br/>
                <p><Link to="/admin/category-list">Categories</Link></p>
                <p><Link to="/admin/podcast-list">Podcasts</Link></p>
            </div>
        )
    }
}
