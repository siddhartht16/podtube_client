import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom'
import './Dashboard.style.css';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="admin-dashboard-wrapper">
                <h3 className="mt-3">PodTube Admin</h3>
                <div className="row mt-3">
                    <div className="col-md-3">
                        <div className="admin-card">
                            <p><span className="fa fa-user icon"/></p>
                            <p>Users: <span className="count">100</span></p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="admin-card">
                            <p><span className="fa fa-list icon"/></p>
                            <p>Categories: <span className="count">300</span></p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="admin-card">
                            <p><span className="fa fa-podcast icon"/></p>
                            <p>Podcasts: <span className="count">800</span></p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="admin-card">
                            <p><span className="fa fa-tv icon"/></p>
                            <p>Episodes: <span className="count">10,000</span></p>
                        </div>
                    </div>
                </div>
                <br/>
                <p><Link to="/admin/category-list">Categories</Link></p>
                <p><Link to="/admin/podcast-list">Podcasts</Link></p>
            </div>
        )
    }
}
