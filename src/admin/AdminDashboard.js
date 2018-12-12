import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AdminDashboard.style.css";
import AdminService from "../services/AdminService";

export default class AdminDashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            appStats: null,
            isLoggedIn: false
        };
    }

    componentDidMount() {
        AdminService.getApplicationStats().then(stats => {
            if (stats === 401) {
                this.setState({
                    isLoggedIn: false
                });
            } else {
                this.setState({
                    appStats: stats,
                    isLoggedIn: true
                });
            }
        });
    }

    render() {
        return (
            <div className="container-fluid mt-5">
                <div className="admin-dashboard-wrapper">
                    <h2 className="mt-3 text-center font-weight-bold">PodTube Admin</h2>
                    {this.state.isLoggedIn === false ? (
                        <p className="help-text text-white mt-4">
                            Please <Link to="/admin">Log In</Link> to see the admin dashboard
                        </p>
                    ) : (
                        <div>
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
                                                    {
                                                        this.state.appStats.noOfTotalUsers
                                                    }
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
                                                    {
                                                        this.state.appStats.noOfCategories
                                                    }
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
                                                    {
                                                        this.state.appStats
                                                            .noOfPodcasts
                                                    }
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
                                                    {
                                                        this.state.appStats
                                                            .noOfEpisodes
                                                    }
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
                                            <Link to="/admin/podcast-list">
                                                Podcasts
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
