import React, { Component } from "react";
import AdminService from "../services/AdminService";
import AdminEpisode from "./AdminEpisode";
import * as utils from "../common/utils";

export default class AdminPodcastDetail extends Component {
    constructor(props) {
        super(props);

        const podcastId = this.props.match.params.id
            ? this.props.match.params.id
            : null;

        this.state = {
            podcastId: podcastId,
            episodes: null
        };
    }

    componentDidMount() {
        AdminService.getEpisodesForPodcast(this.state.podcastId).then(
            episodes => {
                utils.logToConsole(episodes);
                this.setState({ episodes: episodes });
            }
        );
    }

    syncEpisodes = () => {
        AdminService.syncEpisodesForPodcast(this.state.podcastId).then(
            episodes => this.setState({ episodes: episodes })
        );
    };

    render() {
        return (
            <div>
                <div className="sync-btn-wrapper pt-2 pb-2">
                    <button
                        className="btn btn__alt"
                        onClick={this.syncEpisodes}
                    >
                        Sync Episodes
                    </button>
                </div>
                <div className="podcast-list">
                    {this.state.episodes === null ? (
                        <p className="mt-5">Loading...</p>
                    ) : (
                        <div>
                            <ul>
                                {this.state.episodes.map(episode => (
                                    <AdminEpisode
                                        id={episode.id}
                                        title={episode.title}
                                    />
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
