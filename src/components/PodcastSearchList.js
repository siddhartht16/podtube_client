import React, { Component } from "react";
import PropTypes from "prop-types";
import PodcastService from "../services/PodcastService";
import * as utils from "../common/utils";
import PodcastSearchItem from "./PodcastSearchItem";

export default class PodcastSearchList extends Component {
    constructor(props) {
        super(props);
        // utils.logToConsole(props);
        let searchTerm = props.searchTerm;
        utils.logToConsole("PodcastSearchList constructor", searchTerm);
        this.state = {
            searchTerm: searchTerm,
            podcastList: null,
            error: false
        };
    }

    componentDidMount = () => {
        this.makeSearchRequest();
    };

    makeSearchRequest() {
        if (this.state.searchTerm.length > 0) {
            PodcastService.searchPodcastList(this.state.searchTerm).then(
                data => {
                    utils.logToConsole(data);
                    if (data === 500 || data === 400 || data.length === 0) {
                        this.setState({ error: true });
                    } else {
                        utils.logToConsole("setting new data");
                        this.setState(
                            { podcastList: data } //,
                            //     () => {
                            //     utils.logToConsole("Force rerender");
                            //     this.forceUpdate();
                            // }
                        );
                    }
                }
            );
        } else {
            this.setState({ error: true });
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const newSearchTerm = nextProps.searchTerm;
        utils.logToConsole("new search term", newSearchTerm);
        if (this.state.searchTerm !== newSearchTerm) {
            utils.logToConsole("setting new state");
            this.setState({ searchTerm: newSearchTerm }, () => {
                utils.logToConsole("Sending new request for, ", newSearchTerm);
                this.makeSearchRequest();
            });
        }
    }

    render() {
        utils.logToConsole("Render.....", this.state.podcastList);
        return (
            <div>
                {this.state.podcastList === null ? (
                    <p className="mt-3">
                        <i>There was a problem loading the podcasts</i>
                    </p>
                ) : (
                    <div className="podcast-list">
                        <h3 className="mt-3">
                            Subscribe to a podcast to view its episodes
                        </h3>
                        <ul>
                            {this.state.podcastList.map((podcast, index) => (
                                <PodcastSearchItem
                                    key={index}
                                    subComp={false}
                                    podcast={podcast}
                                />
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

PodcastSearchList.propTypes = {
    searchTerm: PropTypes.string
};
