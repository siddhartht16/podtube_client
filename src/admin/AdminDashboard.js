import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AdminDashboard.style.css";
import AdminService from "../services/AdminService";
import * as utils from "../common/utils";

export default class AdminDashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            appStats: null
        };
    }

    componentDidMount() {
        AdminService.getApplicationStats().then(stats => {
            utils.logToConsole(stats);
            this.setState({
                appStats: stats
            });
        });
    }

    render() {
        return (
            <div className="admin-dashboard-wrapper">
                <h3 className="mt-3">PodTube Admin</h3>
                {this.state.appStats === null ? (
                    <p>Loading...</p>
                ) : (
                    <div className="row mt-3">
                        <div className="col-md-3">
                            <div className="admin-card">
                                <p>
                                    <span className="fa fa-user icon" />
                                </p>
                                <p>
                                    Users:{" "}
                                    <span className="count">
                                        {this.state.appStats.noOfTotalUsers}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="admin-card">
                                <p>
                                    <span className="fa fa-list icon" />
                                </p>
                                <p>
                                    Categories:{" "}
                                    <span className="count">
                                        {this.state.appStats.noOfCategories}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="admin-card">
                                <p>
                                    <span className="fa fa-podcast icon" />
                                </p>
                                <p>
                                    Podcasts:{" "}
                                    <span className="count">
                                        {this.state.appStats.noOfPodcasts}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="admin-card">
                                <p>
                                    <span className="fa fa-tv icon" />
                                </p>
                                <p>
                                    Episodes:{" "}
                                    <span className="count">
                                        {this.state.appStats.noOfEpisodes}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <br />
                            <p>
                                <Link to="/admin/category-list">
                                    Categories
                                </Link>
                            </p>
                            <p>
                                <Link to="/admin/podcast-list">Podcasts</Link>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
