import React, {Component} from "react";
import "./EpisodeList.style.css";
import BookmarkService from "../services/BookmarkService";
import * as utils from "../common/utils";
import {Redirect} from "react-router-dom";

export default class Episode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            episode: props.episode,
            error: false
        };
    }

    formatEpisodeDate = date => {
        var newDate = new Date(date);
        const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];

        let formatedDate =
            newDate.getDate() +
            " " +
            monthNames[newDate.getMonth()] +
            " " +
            newDate.getFullYear();
        return formatedDate;
    };

    bookmarkEpisode = () => {
        BookmarkService.createUserBookmark(this.state.episode.id).then(
            episode => {
                if (episode === 401) {
                    this.setState({error: true});
                } else {
                    this.setState({episode: episode, error: false});
                }
            }
        );
    };

    unMarkEpisode = () => {
        window.location.reload();
        BookmarkService.deleteUserBookmark(this.state.episode.id).then(
            episode => {
                utils.logToConsole(episode);
                if (episode === 401) {
                    this.setState({
                        error: true
                    });
                } else {
                    this.setState({episode: episode, error: false});
                }
            }
        );
    };

    componentDidMount() {
        this.formatEpisodeDate();
    }

    render() {
        const error = this.state.error;
        if (error === true) {
            return <Redirect to="/login"/>;
        }
        return (
            <div className="episode-wrapper mb-2">
                <div className="row">
                    <div className="col-md-2">
                        {this.state.episode.thumbnail !== "" ? (
                            <img
                                src={this.state.episode.thumbnail}
                                className="episode-thumbnail"
                            />
                        ) : (
                            <img
                                src={this.props.PodcastImg}
                                className="episode-thumbnail"
                            />
                        )}
                        <p className="episode-pub-date">
                            {this.formatEpisodeDate(this.state.episode.pubDate)}
                        </p>
                    </div>
                    <div className="col-md-10">
                        <h5>{this.state.episode.title}</h5>
                        <div className="row mt-3">
                            <div className="col-md-1">
                                <a
                                    className="fa fa-play-circle episode-play"
                                    target="_blank"
                                    onClick={this.props.getEpisodeAudio}
                                    title="Play Episode"
                                />
                            </div>
                            <div className="col-md-1">
                                {this.state.episode.bookmarked === false ? (
                                    <span
                                        className="fa fa-star episode-bookmark"
                                        onClick={this.bookmarkEpisode}
                                        title="Bookmark Episode"
                                    />
                                ) : (
                                    <span
                                        className="fa fa-star episode-bookmark yellow"
                                        onClick={this.unMarkEpisode}
                                        title="Unmark Episode"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
