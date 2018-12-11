import React, { Component } from "react";
import UserService from "../../services/UserService";
import { Link } from "react-router-dom";

export default class EditProfile extends Component {
    constructor(props) {
        super(props);
        const userId = this.props.match ? this.props.match.params.id : null;
        this.state = {
            userId: userId,
            userProfile: null,
            isLoggedOut: false,
            comments: null,
            error: false
        };
    }

    componentDidMount() {
        UserService.fetchProfileForUser().then(data => {
            if (data === 401) {
                this.setState({ isLoggedOut: true });
            } else {
                this.setState({ userProfile: data });
            }
        });
        this.getCommentForUser();
    }

    getCommentForUser = () => {
        //Way to find the actual userId of the loggedIn user
        // Temp set it as 1 so work things
        let userId = this.state.userId !== null ? this.state.userId : 1;
        UserService.getCommentForUser(userId).then(data => {
            if (data === 400) {
                this.setState({
                    error: true
                });
            }
            this.setState({
                comments: data
            });
        });
    };

    render() {
        return (
            <div>
                {this.state.isLoggedOut === false ? (
                    <div className="profile-wrapper">
                        <h4 className="profile-header">Edit your profile</h4>
                        {this.state.userProfile === null ? (
                            <i>Loading...</i>
                        ) : (
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <div className="profile-body">
                                        <p className="text-green">Profile</p>
                                        <form role="form">
                                            <div className="form-group">
                                                <label className="control-label">
                                                    Username
                                                </label>
                                                <input
                                                    id="profile-username"
                                                    readOnly
                                                    value={
                                                        this.state.userProfile
                                                            .username
                                                    }
                                                    className="form-control"
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label className="control-label">
                                                    First name
                                                </label>
                                                <input
                                                    id="profile-firstname"
                                                    className="form-control"
                                                    value={
                                                        this.state.userProfile
                                                            .firstname
                                                    }
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label className="control-label">
                                                    Last name
                                                </label>
                                                <input
                                                    id="profile-lastname"
                                                    value={
                                                        this.state.userProfile
                                                            .lastname
                                                    }
                                                    className="form-control"
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label className="control-label">
                                                    Email Address
                                                </label>
                                                <input
                                                    id="profile-email"
                                                    className="form-control"
                                                    value={
                                                        this.state.userProfile
                                                            .email
                                                    }
                                                />
                                            </div>
                                            <div className="mt-4">
                                                <button
                                                    className="btn btn__cta"
                                                    type="button"
                                                >
                                                    Save profile
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <div>
                        <h3 className="mt-3">Profile</h3>
                        <p className="help-text text-white mt-3">
                            Please <Link to="/login">Log In</Link> to see your
                            Profile
                        </p>
                    </div>
                )}
            </div>
        );
    }
}
