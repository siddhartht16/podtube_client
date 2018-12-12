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
            <div className="container-fluid mt-5">
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
                        <div
                            className={
                                "table table-striped table-hover text-justify"
                            }
                        >
                            {/*<ul>*/}
                            <div className="row bg-light text-dark">
                                <div className={"col"}>Id</div>
                                <div className={"col"}>Title</div>
                                <div className={"col"}>Last Synced On</div>
                                <div className={"col"}>Media Type</div>
                                <div className={"col"}>Publish Date</div>
                                <div className={"col"}>Author</div>
                                {/*<div className={"col"}>Link</div>*/}
                                <div className={"col"}>Enclosure Link</div>
                                <div className={"col"}>Enclosure Type</div>
                                <div className={"col"}>Enclosure Length</div>
                                <div className={"col"}>Enclosure Duration</div>
                                {/*<div className={"col"}>Description</div>*/}
                                <div className={"col"}>Created By</div>
                                <div className={"col"}>Modified By</div>
                                <div className={"col"}>Created On</div>
                                <div className={"col"}>Modified On</div>
                                {/*<div className={"col"}>guid</div>*/}
                                {/*<div className={"col"}>Thumbnail</div>*/}
                            </div>
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
                                    enclosureDuration={
                                        episode.enclosureDuration
                                    }
                                    enclosureThumbnail={
                                        episode.enclosureThumbnail
                                    }
                                    createdOn={episode.createdOn}
                                    modifiedOn={episode.modifiedOn}
                                    createdBy={episode.createdBy}
                                    modifiedBy={episode.modifiedBy}
                                    lastSyncedOn={episode.lastSyncedOn}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
