import React, { Component } from "react";
import { Link } from "react-router-dom";
import PodcastIcon from "../assests/podcast-icon.png";
import * as contexts from "../common/contexts";
import * as constants from "../common/constants";

export default class Sidebar extends Component {
    constructor(props) {
        super(props);

        const appContext = props.appContext ? props.appContext : "";
        this.state = {
            appContext: appContext,
            active: ""
        };
    }

    componentDidMount() {}

    changeActiveClassForLink = linkName => {
        this.setState({ active: linkName });
    };

    getLinkForAppContext() {
        let result = "";

        switch (this.state.appContext) {
            case contexts.CATEGORIES_CONTEXT_CONST:
                result = constants.CATEGORIES_LINK;
                break;
            case contexts.SUBSCRIPTIONS_CONTEXT_CONST:
                result = constants.SUBSCRIPTIONS_LINK;
                break;
            case contexts.BOOKMARKS_CONTEXT_CONST:
                result = constants.BOOKMARKS_LINK;
                break;
            case contexts.HISTORY_CONTEXT_CONST:
                result = constants.HISTORY_LINK;
                break;
            case contexts.PLAYLISTS_CONTEXT_CONST:
                result = constants.PLAYLIST_LINK;
                break;
            case contexts.PROFILE_CONTEXT_CONST:
                result = constants.PROFILE_LINK;
                break;
            default:
                break;
        }

        // console.log(result);
        return result;
    } //getLinkForAppContext..

    isActiveLink(link) {
        console.log("INput: " + link);
        const appContextLink = this.getLinkForAppContext(this.state.appContext);
        console.log("appContextLink: " + appContextLink);
        console.log(appContextLink === link);
        return appContextLink === link;
    } //isActiveLink..

    render() {
        return (
            <div>
                <h3 className="mb-5 app-name">
                    <Link to="/">
                        <img src={PodcastIcon} className="home-logo" />
                        PodTube
                    </Link>
                </h3>
                <ul className="sidebar-list">
                    <li>
                        <Link
                            to="/categories"
                            // onClick={() => this.changeActiveClassForLink('categories')}
                            className={
                                this.isActiveLink("categories") === true
                                    ? "active"
                                    : null
                            }
                        >
                            <i
                                className="fa fa-search icon"
                                aria-hidden="true"
                            />
                            Categories
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/subscriptions"
                            className={
                                this.isActiveLink("subscriptions") === true
                                    ? "active"
                                    : null
                            }
                            // onClick={() => this.changeActiveClassForLink('subscriptions')}
                        >
                            <i
                                className="fa fa-plus-circle icon"
                                aria-hidden="true"
                            />
                            Subscriptions
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/bookmarks"
                            className={
                                this.isActiveLink("bookmarks") === true
                                    ? "active"
                                    : null
                            }
                            // onClick={() => this.changeActiveClassForLink('bookmarks')}
                        >
                            <i className="fa fa-star icon" aria-hidden="true" />
                            Bookmarks
                        </Link>
                    </li>
                    <li>
                        <a href="#">
                            <i
                                className="fa fa-play-circle icon"
                                aria-hidden="true"
                            />
                            Playlist
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i
                                className="fa fa-history icon"
                                aria-hidden="true"
                            />
                            Recently Played
                        </a>
                    </li>
                    {/*<li><a href=""><i className="fa fa-file icon" aria-hidden="true"/>Latest Podcasts</a></li>*/}
                    <li>
                        <Link
                            to="/profile"
                            className={
                                this.isActiveLink("profile") === true
                                    ? "active"
                                    : null
                            }
                            // onClick={() => this.changeActiveClassForLink('profile')}
                        >
                            <i className="fa fa-user icon" aria-hidden="true" />
                            Profile
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}
