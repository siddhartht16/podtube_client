import React, {Component} from "react";
import AdminService from "../services/AdminService";
import AdminEpisode from "./AdminEpisode";
import * as utils from "../common/utils";
import './AdminDashboard.style.css';

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
                this.setState({episodes: episodes});
            }
        );
    }

    syncEpisodes = () => {
        AdminService.syncEpisodesForPodcast(this.state.podcastId).then(
            episodes => this.setState({episodes: episodes})
        );
    };

    render() {
        return (
            <div className="container-fluid mt-5">
                <div className="sync-btn-wrapper pt-2 pb-2 mb-2">
                    <button
                        className="btn btn__alt"
                        onClick={this.syncEpisodes}>
                        Sync Episodes
                    </button>
                </div>
                <div>
                    {this.state.episodes === null ? (
                        <p className="mt-5">Loading...</p>) : (
                        <table className={"table table-sm admin-table"}>
                            <thead className="thead-light">
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Media Type</th>
                                <th>Enclosure Link</th>
                                <th>Publish Date</th>
                                <th>Last Synced On</th>
                                <th>Created On</th>
                                <th>Modified On</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.episodes.map((episode, index) => (
                                <AdminEpisode
                                    key={index}
                                    id={episode.id}
                                    title={episode.title}
                                    mediaType={episode.mediaType}
                                    pubDate={episode.pubDate}
                                    link={episode.link}
                                    guid={episode.guid}
                                    author={episode.author}
                                    thumbnail={episode.thumbnail}
                                    description={episode.description}
                                    enclosureLink={episode.enclosureLink}
                                    enclosureType={episode.enclosureType}
                                    enclosureLength={episode.enclosureLength}
                                    enclosureDuration={episode.enclosureDuration}
                                    enclosureThumbnail={episode.enclosureThumbnail}
                                    createdOn={episode.createdOn}
                                    modifiedOn={episode.modifiedOn}
                                    createdBy={episode.createdBy}
                                    modifiedBy={episode.modifiedBy}
                                    lastSyncedOn={episode.lastSyncedOn}
                                />
                            ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        );
    }
}
