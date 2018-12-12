import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookmarkService from "../services/BookmarkService";
import PodcastIcon from "../assests/podcast-icon2.jpg";
import Episode from "./Episode";
import * as utils from "../common/utils";
import PlayerWrapper from "./PlayerWrapper";
import _ from "lodash";

export default class Bookmarks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookmarks: null,
            isLoggedOut: false,
            selectedEpisode: null,
            selectedEpisodeURL: null
        };
    }

    componentDidMount() {
        BookmarkService.getAllUserBookmarks().then(res => {
            utils.logToConsole(res);
            if (res === 401) {
                this.setState({
                    isLoggedOut: true
                });
            } else {
                this.setState({
                    bookmarks: res
                });
            }
        });
    }

    getEpisodeAudio = episode => {
        const episodeMediaUrl = episode.enclosureLink;
        if (_.isEmpty(episodeMediaUrl)) {
            alert("No media found for this episode");
            return;
        } else {
            console.log(episodeMediaUrl);
            this.setState({
                selectedEpisodeURL: episodeMediaUrl,
                selectedEpisode: episode
            });
        }
    };

    render() {
        const subCount = {
            marginBottom: "15px",
            color: "#7f858f",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "20px"
        };
        return (
            <div>
                <h3 className="mt-3">Bookmarks</h3>
                {this.state.isLoggedOut === true ? (
                    <p className="help-text text-white mt-3">
                        Please <Link to="/login">Log In</Link> to see your
                        bookmarks
                    </p>
                ) : (
                    <div className="podcast-list">
                        {this.state.bookmarks === null ? (
                            <p>
                                <i>Loading...</i>
                            </p>
                        ) : (
                            <div>
                                <p style={subCount}>
                                    Total Bookmarked Episodes :{" "}
                                    {this.state.bookmarks.length}
                                </p>
                                <ul>
                                    {this.state.bookmarks.map(
                                        (episode, index) => (
                                            <Episode
                                                key={index}
                                                id={episode.id}
                                                episode={episode.episode}
                                                PodcastImg={PodcastIcon}
                                                getEpisodeAudio={() =>
                                                    this.getEpisodeAudio(
                                                        episode.episode
                                                    )
                                                }
                                            />
                                        )
                                    )}
                                </ul>
                                <PlayerWrapper
                                    mediaUrl={this.state.selectedEpisodeURL}
                                    episode={this.state.selectedEpisode}
                                />
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    }
} //Bookmarks..
