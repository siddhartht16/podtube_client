import React, { Component } from "react";
import { Link } from "react-router-dom";
import PodcastIcon from "../assests/podcast-icon2.jpg";
import Episode from "./Episode";
import * as utils from "../common/utils";
import RecentlyPlayedService from "../services/RecentlyPlayedService";
import PlayerWrapper from "./PlayerWrapper";
import _ from "lodash";

export default class RecentlyPlayed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: null,
            isLoggedOut: false,
            selectedEpisode: null,
            selectedEpisodeURL: null
        };
    }

    componentDidMount() {
        RecentlyPlayedService.getHistoryForUser().then(res => {
            utils.logToConsole(res);
            if (res === 401) {
                this.setState({
                    isLoggedOut: true
                });
            } else {
                this.setState({
                    history: res
                });
            }
        });
    }

    clearHistory = () => {
        RecentlyPlayedService.clearHistory().then(res => {
            utils.logToConsole(res);
            if (!_.isEmpty(res) && res["success"] === true) {
                this.setState({
                    history: []
                });
            }
        });
    };

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
                <h3 className="mt-3">Recently Played</h3>
                {this.state.isLoggedOut === true ? (
                    <p className="help-text text-white mt-3">
                        Please <Link to="/login">Log In</Link> to see your
                        recently played episodes
                    </p>
                ) : (
                    <div className="podcast-list">
                        {this.state.history === null ? (
                            <p>
                                <i>Loading...</i>
                            </p>
                        ) : (
                            <div>
                                <p style={subCount}>
                                    Recently played episodes:{" "}
                                    {this.state.history.length}
                                </p>
                                <button onClick={this.clearHistory} type="button" className="btn__alt btn">
                                    Clear History
                                </button>
                                <ul>
                                    {this.state.history.map(episode => (
                                        <Episode
                                            id={episode.id}
                                            episode={episode.episode}
                                            PodcastImg={PodcastIcon}
                                            getEpisodeAudio={() =>
                                                this.getEpisodeAudio(
                                                    episode.episode
                                                )
                                            }
                                        />
                                    ))}
                                </ul>
                                <PlayerWrapper
                                    mediaUrl={this.state.selectedEpisodeURL}
                                    episode={this.state.selectedEpisode}
                                />
                                {/*<ReactPlayer*/}
                                {/*url={this.state.episodeURL}*/}
                                {/*className="react-player fixed-bottom"*/}
                                {/*controls*/}
                                {/*playbackRate={1}*/}
                                {/*/>*/}
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    }
} //history..
