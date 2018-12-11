import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserService from "../services/UserService";
import * as utils from "../common/utils";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchedPodcast: ""
        };
    }

    logoutUser = () => {
        UserService.logoutUser();
        utils.clearUserDataFromLocal();
        console.log("User logged out");
    };

    getSearchedPodcastName = e => {
        this.setState({ searchedPodcast: e.target.value });
    };

    render() {
        return (
            <header className="App-header">
                <div className="row">
                    <div className="col-md-10">
                        <div className="input-group mt-3">
                            <input
                                type="text"
                                className="search-podcast"
                                value={this.state.searchedPodcast}
                                placeholder="Search Podcasts"
                                onChange={this.getSearchedPodcastName}
                            />
                            <span className="input-group-btn">
                                <Link
                                    to={`/search/${this.state.searchedPodcast}`}
                                >
                                    <span
                                        className="fa fa-search search-icon"
                                        role="button"
                                        title="Search"
                                    />
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <Link
                            className="logout"
                            onClick={this.logoutUser}
                            to="/categories"
                        >
                            Logout
                        </Link>
                        <Link className="logout" to="/login">
                            Login
                        </Link>
                        <Link to="/register" className="logout">
                            Register
                        </Link>
                    </div>
                </div>
            </header>
        );
    }
}
