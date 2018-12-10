import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PodcastIcon from '../assests/podcast-icon.png';

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'categories'
        }
    }

    componentDidMount() {

    }

    changeActiveClassForLink = (linkName) => {
        this.setState({active: linkName});
    };

    render() {
        return (
            <div>
                <h3 className="mb-5 app-name">
                    <Link to="/">
                        <img src={PodcastIcon} className="home-logo"/>
                        PodTube
                    </Link>
                </h3>
                <ul className="sidebar-list">
                    <li>
                        <Link to="/categories"
                              onClick={() => this.changeActiveClassForLink('categories')}
                              className={"" + this.state.active === 'categories' ? 'active' : null}>
                            <i className="fa fa-search icon" aria-hidden="true"/>
                            Categories
                        </Link>
                    </li>
                    <li>
                        <Link to="/subscriptions"
                              className={"" + this.state.active === 'subscriptions' ? 'active' : null}
                              onClick={() => this.changeActiveClassForLink('subscriptions')}>
                            <i className="fa fa-plus-circle icon" aria-hidden="true"/>
                            Subscriptions
                        </Link>
                    </li>
                    <li><a href="#"><i className="fa fa-play-circle icon" aria-hidden="true"/>Playlist</a></li>
                    <li><a href=""><i className="fa fa-history icon" aria-hidden="true"/>Recently Played</a></li>
                    <li>
                        <Link to="/bookmarks"
                              className={"" + this.state.active === 'bookmarks' ? 'active' : null}
                              onClick={() => this.changeActiveClassForLink('bookmarks')}>
                            <i className="fa fa-star icon" aria-hidden="true"/>
                            Bookmarks
                        </Link>
                    </li>
                    {/*<li><a href=""><i className="fa fa-file icon" aria-hidden="true"/>Latest Podcasts</a></li>*/}
                    <li>
                        <Link to="/profile"
                              className={"" + this.state.active === 'profile' ? 'active' : null}
                              onClick={() => this.changeActiveClassForLink('profile')}>
                            <i className="fa fa-user icon" aria-hidden="true"/>Profile
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}
