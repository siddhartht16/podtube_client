import React, { Component } from "react";
import PropTypes from "prop-types";
import UserService from "../services/UserService";
import { Link } from "react-router-dom";
import Comment from "../components/Comment";
import Followers from "../components/Followers";
import Following from "../components/Following";
import * as utils from "../common/utils";

export default class Profile extends Component {
    constructor(props) {
        super(props);
        const userId = this.props.userId ? this.props.userId : null;
        let loggedInUserId = utils.getUserIdFromLocal();
        this.state = {
            userId: userId,
            userProfile: null,
            isLoggedOut: false,
            comments: null,
            error: false,
            loggedInUserId: loggedInUserId
        };
    }

    componentDidMount() {
        UserService.fetchProfileForUser().then(data => {
            utils.logToConsole(data);
            if (data === 401) {
                this.setState({ isLoggedOut: true });
            } else {
                this.setState({ userProfile: data });
            }
        });
    }

    formatCommentDate = date => {
        var newDate = new Date(date);
        let formatedDate =
            newDate.getMonth() +
            1 +
            "/" +
            newDate.getDate() +
            "/" +
            newDate.getFullYear();
        return formatedDate;
    };

    render() {
        return (
            <div>
                {this.state.isLoggedOut === false ? (
                    <div className="profile-wrapper">
                        <h4 className="profile-header">Account Overview</h4>
                        {this.state.userProfile === null ? (
                            <i>Loading...</i>
                        ) : (
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <div className="profile-body">
                                        <p className="text-green">Profile</p>
                                        <form role="form">
                                            <div className="form-group">
                                                <label className="control-label">
                                                    Username
                                                </label>
                                                <p id="profile-username">
                                                    {
                                                        this.state.userProfile
                                                            .user.username
                                                    }
                                                </p>
                                            </div>

                                            <div className="form-group">
                                                <label className="control-label">
                                                    First name
                                                </label>
                                                <p id="profile-firstname">
                                                    {this.state.userProfile.user
                                                        .firstname ? (
                                                        this.state.userProfile
                                                            .user.firstname
                                                    ) : (
                                                        <span>---</span>
                                                    )}
                                                </p>
                                            </div>

                                            <div className="form-group">
                                                <label className="control-label">
                                                    Last name
                                                </label>
                                                <p id="profile-lastname">
                                                    {this.state.userProfile.user
                                                        .lastname ? (
                                                        this.state.userProfile
                                                            .user.lastname
                                                    ) : (
                                                        <span>---</span>
                                                    )}
                                                </p>
                                            </div>

                                            <div className="form-group">
                                                <label className="control-label">
                                                    Email Address
                                                </label>
                                                <p id="profile-email">
                                                    {this.state.userProfile.user
                                                        .email ? (
                                                        this.state.userProfile
                                                            .user.email
                                                    ) : (
                                                        <span>---</span>
                                                    )}
                                                </p>
                                            </div>
                                            <div>
                                                <button
                                                    className="btn__cta btn mb-3"
                                                    type="button"
                                                >
                                                    <Link to="/editProfile">
                                                        Edit Profile
                                                    </Link>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-12 mt-3">
                                    <div className="profile-body fixed-minHeight">
                                        <p className="text-green">Followers</p>
                                        <div className="form-group">
                                            <ul>
                                                {this.state.userProfile
                                                    .followers.length === 0 ? (
                                                    <span className="help-text">
                                                        No users are following
                                                        you
                                                    </span>
                                                ) : null}
                                                {this.state.userProfile.followers.map(
                                                    user => (
                                                        <Followers
                                                            user={user}
                                                        />
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="profile-body fixed-minHeight mt-3">
                                        <p className="text-green">Following</p>
                                        <div className="form-group">
                                            <ul>
                                                {this.state.userProfile
                                                    .following.length === 0 ? (
                                                    <span className="help-text">
                                                        You are not following
                                                        any users
                                                    </span>
                                                ) : null}
                                                {this.state.userProfile.following.map(
                                                    user => (
                                                        <Following
                                                            user={user}
                                                        />
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 mt-4">
                                    <div className="profile-body fixed-minHeight">
                                        <p className="text-green">Comments</p>
                                        <form role="form">
                                            <div className="form-group">
                                                <ul>
                                                    {this.state.userProfile
                                                        .comments.length ===
                                                    0 ? (
                                                        <span className="help-text">
                                                            No comments given by
                                                            you yet
                                                        </span>
                                                    ) : null}
                                                    {this.state.error ===
                                                        false &&
                                                        this.state.userProfile.comments.map(
                                                            comment => (
                                                                <Comment
                                                                    comment={
                                                                        comment
                                                                    }
                                                                    date={this.formatCommentDate(
                                                                        comment.createdOn
                                                                    )}
                                                                    proComp={
                                                                        true
                                                                    }
                                                                />
                                                            )
                                                        )}
                                                </ul>
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

Profile.propTypes = {
    userId: PropTypes.number
};
