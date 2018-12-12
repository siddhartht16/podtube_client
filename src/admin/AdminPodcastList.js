import React, {Component} from "react";
import AdminService from "../services/AdminService";
import AdminPodcast from "./AdminPodcast";
import * as utils from "../common/utils";
import './AdminDashboard.style.css'

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
                    this.setState({podcasts: podcasts});
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
            podcasts => this.setState({podcasts: podcasts})
        );
    };

    getGridHtml(data) {
        return (
            <table className={"table table-sm admin-table"}>
                <thead className="thead-light">
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Url</th>
                    <th>GPodder Link</th>
                    <th>Last Synced On</th>
                    <th>Created On</th>
                    <th>Modified On</th>
                </tr>
                </thead>
                <tbody>
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
                </tbody>
            </table>
        );
    } //getGridHtml..

    render() {
        const data =
            this.state.categoryId !== null
                ? this.state.podcasts
                : this.state.allPodcasts;

        return (
            <div className="container-fluid mt-5">
                <div className="sync-btn-wrapper pt-2 pb-2 mb-2">
                    {this.state.categoryId !== null ? (
                        <button
                            className="btn btn__alt"
                            onClick={this.syncPodcasts}
                        >
                            Sync Podcasts
                        </button>
                    ) : null}
                </div>
                <div>
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
