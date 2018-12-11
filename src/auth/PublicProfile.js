import React, {Component} from "react";
import PropTypes from "prop-types";
import UserService from "../services/UserService";
import {Redirect, Link} from "react-router-dom";
import Comment from "../components/Comment";
import Followers from "../components/Followers";
import Following from "../components/Following";
import * as utils from "../common/utils";
import FollowService from "../services/FollowService";

export default class PublicProfile extends Component {
    constructor(props) {
        super(props);
        const userId = this.props.userId ? this.props.userId : null;
        const loggedInUserId = utils.getUserIdFromLocal();
        this.state = {
            userId: userId,
            userProfile: null,
            isLoggedOut: false,
            comments: null,
            error: false,
            follow: '',
            loggedInUserId: loggedInUserId
        };
    }

    componentDidMount() {
        if (this.state.userId !== null) {
            console.log("Parameter in URL : " + this.state.userId);
            UserService.fetchPublicProfileForUser(this.state.userId).then(data => {
                console.log(data);
                if (data === 401) {
                    this.setState({isLoggedOut: true});
                } else {
                    this.setState({userProfile: data});
                }
            });
        }
    }

    onFollowUserHandler = () => {
        FollowService.followUser(this.state.userId)
            .then(data => {
                console.log(data);
                this.setState({userProfile: data, follow: 'true'});
            })
    };

    onUnfollowUserHandler = () => {
        FollowService.unFollowUser(this.state.userId)
            .then(data => {
                console.log(data);
                this.setState({userProfile: data, follow: 'false'});
            })
    };

    formatCommentDate = date => {
        var newDate = new Date(date);
        let formatedDate = newDate.getMonth() + 1 + "/" + newDate.getDate() + "/" + newDate.getFullYear();
        return formatedDate;
    };

    render() {
        if (this.state.loggedInUserId === this.state.userId) {
            return <Redirect to="/profile"/>
        }
        return (
            <div>
                {this.state.isLoggedOut === false ? (
                    <div className="profile-wrapper">
                        <h4 className="profile-header">Account Overview</h4>
                        {this.state.userProfile === null ? <i>Loading...</i>
                            :
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    {this.state.follow === 'true' ? (
                                        <div className="alert alert-success" role="alert">
                                            Sucessfully Followed {this.state.userProfile.username}.
                                        </div>
                                    ) : null}
                                    {this.state.follow === 'false' ? (
                                        <div className="alert alert-success" role="alert">
                                            Sucessfully Unfollowed {this.state.userProfile.username}.
                                        </div>
                                    ) : null}
                                    <div className="profile-body">
                                        <p className="text-green">Profile</p>
                                        <form role="form">
                                            <div className="form-group">
                                                <label className="control-label">
                                                    Username
                                                </label>
                                                <p id="profile-username">
                                                    {this.state.userProfile.username}
                                                </p>
                                            </div>

                                            <div className="form-group">
                                                <label className="control-label">
                                                    First name
                                                </label>
                                                <p id="profile-firstname">
                                                    {this.state.userProfile.firstname ? (this.state.userProfile.firstname
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
                                                    {this.state.userProfile.lastname ? (
                                                        this.state.userProfile.lastname
                                                    ) : (
                                                        <span>---</span>
                                                    )}
                                                </p>
                                            </div>
                                            <div>{
                                                this.state.userProfile.followed === true ?
                                                    <button
                                                        className="btn btn__cta"
                                                        onClick={this.onUnfollowUserHandler}
                                                        type="button">
                                                        Unfollow &nbsp;
                                                        {this.state.userProfile.username}
                                                    </button> :
                                                    <button
                                                        className="btn btn__cta"
                                                        onClick={this.onFollowUserHandler}
                                                        type="button">
                                                        Follow &nbsp;
                                                        {this.state.userProfile.username}
                                                    </button>
                                            }

                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-12 mt-3">
                                    <div className="profile-body">
                                        <p className="text-green">Subscribed Podcasts</p>
                                        <div className="form-group">
                                            {
                                                this.state.userProfile.subscribedPodcasts.length === 0 ?
                                                    <span className="help-text">No subscribed podcasts</span> :
                                                    <ul>
                                                        {
                                                            this.state.userProfile.subscribedPodcasts.map((sub, index) =>
                                                                <li key={index}>
                                                                    <p><Link className="text-dark"
                                                                        to={`/podcast/${sub.id}/episodes`}>{sub.title}
                                                                    </Link>
                                                                    </p>
                                                                </li>
                                                            )
                                                        }
                                                    </ul>
                                            }
                                        </div>
                                    </div>
                                </div>
                                {/*<div className="col-md-12 mt-3">*/}
                                {/*<div className="profile-body">*/}
                                {/*<p className="text-green">Followers</p>*/}
                                {/*<form role="form">*/}
                                {/*<div className="form-group">*/}
                                {/*/!*<Followers followerList={this.state.userProfile.followers}/>*!/*/}
                                {/*</div>*/}
                                {/*</form>*/}
                                {/*</div>*/}
                                {/*<div className="profile-body mt-4">*/}
                                {/*<p className="text-green">Following</p>*/}
                                {/*<form role="form">*/}
                                {/*<div className="form-group">*/}
                                {/*/!*<Following followerList={this.state.userProfile.following}/>*!/*/}
                                {/*</div>*/}
                                {/*</form>*/}
                                {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="col-md-12 mt-4">*/}
                                {/*<div className="profile-body">*/}
                                {/*<p className="text-green">*/}
                                {/*Comments and Ratings*/}
                                {/*</p>*/}
                                {/*<form role="form">*/}
                                {/*<div className="form-group">*/}
                                {/*<ul>*/}
                                {/*{this.state.userProfile*/}
                                {/*.comments.length === 0 ? (*/}
                                {/*<span className="help-text">*/}
                                {/*No comments given by this user*/}
                                {/*</span>*/}
                                {/*) : null}*/}
                                {/*{this.state.error === false &&*/}
                                {/*this.state.userProfile.comments.map(*/}
                                {/*comment => (*/}
                                {/*<Comment*/}
                                {/*comment={comment}*/}
                                {/*date={this.formatCommentDate(comment.createdOn)}*/}
                                {/*proComp={true}/>*/}
                                {/*)*/}
                                {/*)}*/}
                                {/*</ul>*/}
                                {/*</div>*/}
                                {/*</form>*/}
                                {/*</div>*/}
                                {/*</div>*/}
                            </div>
                        }
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

PublicProfile.propTypes = {
    userId: PropTypes.number
};
