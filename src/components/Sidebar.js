import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom'
export default class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <h3 className="mb-5 app-name">
                    <Link to="/">PodTube</Link>
                </h3>
                <ul className="sidebar-list">
                    <li><a href="#" className="active"><i className="fa fa-search icon" aria-hidden="true"/>Categories</a></li>
                    <li><a href="#"><i className="fa fa-plus-circle icon" aria-hidden="true"/>Subscriptions</a></li>
                    <li><a href="#"><i className="fa fa-play-circle icon" aria-hidden="true"/>Playlist</a></li>
                    <li><a href=""><i className="fa fa-history icon" aria-hidden="true"/>History</a></li>
                    <li><a href=""><i className="fa fa-bookmark icon" aria-hidden="true"/>Bookmarks</a></li>
                    <li><a href=""><i className="fa fa-file icon" aria-hidden="true"/>New Releases</a></li>
                    <li><Link to="/profile"><i className="fa fa-user icon" aria-hidden="true"/>Profile</Link></li>
                </ul>
            </div>
        )
    }
}
