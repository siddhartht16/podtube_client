import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as utils from "../common/utils";

export default class Header extends Component {
    constructor(props) {
        super(props);
        const searchTerm = props.searchTerm ? props.searchTerm : "";
        this.state = {
            searchedPodcast: searchTerm
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        utils.logToConsole("Header props, ", nextProps);
        if (this.state.searchedPodcast !== nextProps.searchTerm) {
            this.setState({ searchedPodcast: nextProps.searchTerm });
        }
    }

    getSearchedPodcastName = e => {
        this.setState({ searchedPodcast: e.target.value });
    };

    render() {
        utils.logToConsole("Header render", this.state.searchedPodcast);
        return (
            <header className="App-header">
                <div className="row">
                    <div className="col-md-12">
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
                </div>
            </header>
        );
    }
}
