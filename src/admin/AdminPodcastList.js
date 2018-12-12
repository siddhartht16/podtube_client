import React, { Component } from "react";
import AdminService from "../services/AdminService";
import AdminPodcast from "./AdminPodcast";
import * as utils from "../common/utils";

export default class AdminPodcastList extends Component {
    constructor(props) {
        super(props);
        const categoryId = this.props.match ? this.props.match.params.id : null;

        this.state = {
            categoryId: categoryId,
            allPodcasts: null,
            podcasts: null
        };
    }

    componentDidMount() {
        if (this.state.categoryId !== null) {
            AdminService.getPodcastForCategory(this.state.categoryId).then(
                podcasts => {
                    utils.logToConsole(podcasts);
                    this.setState({ podcasts: podcasts });
                }
            );
        } else {
            AdminService.getAllPodcasts().then(allPodcasts => {
                this.setState({
                    allPodcasts: allPodcasts
                });
            });
        }
    }

    syncPodcasts = () => {
        AdminService.syncPodcastForCategory(this.state.categoryId).then(
            podcasts => this.setState({ podcasts: podcasts })
        );
    };

    getGridHtml(data) {
        return (
            <div className={"table table-striped table-hover text-justify"}>
                {/*<ul>*/}
                <div className="row bg-light text-dark">
                    <div className={"col"}>Id</div>
                    <div className={"col"}>Title</div>
                    <div className={"col"}>Description</div>
                    <div className={"col"}>Last Synced On</div>
                    <div className={"col"}>Url</div>
                    <div className={"col"}>Website</div>
                    <div className={"col"}>GPodder Link</div>
                    <div className={"col"}>Author</div>
                    <div className={"col"}>Created By</div>
                    <div className={"col"}>Modified By</div>
                    <div className={"col"}>Created On</div>
                    <div className={"col"}>Modified On</div>
                </div>
                {/*<ul>*/}
                {data.map((podcast, index) => (
                    <AdminPodcast
                        key={index}
                        id={podcast.id}
                        logo={podcast.logo_url}
                        title={podcast.title}
                        url={podcast.url}
                        website={podcast.website}
                        mygpo_link={podcast.mygpo_link}
                        author={podcast.author}
                        createdBy={podcast.createdBy}
                        modifiedBy={podcast.modifiedBy}
                        createdOn={podcast.createdOn}
                        modifiedOn={podcast.modifiedOn}
                        lastSyncedOn={podcast.lastSyncedOn}
                        description={podcast.description}
                    />
                ))}
                {/*</ul>*/}
            </div>
        );
    } //getGridHtml..

    render() {
        const data =
            this.state.categoryId !== null
                ? this.state.podcasts
                : this.state.allPodcasts;

        return (
            <div className="container-fluid mt-5">
                <div className="sync-btn-wrapper pt-2 pb-2">
                    {this.state.categoryId !== null ? (
                        <button
                            className="btn btn__alt"
                            onClick={this.syncPodcasts}
                        >
                            Sync Podcasts
                        </button>
                    ) : null}
                </div>
                <div className="podcast-list">
                    {data === null ? (
                        <p className="mt-5">Loading...</p>
                    ) : (
                        this.getGridHtml(data)
                    )}
                </div>
            </div>
        );
    }
}
