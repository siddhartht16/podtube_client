import React, {Component} from 'react'
import UserService from "../../services/UserService";
import {Link} from "react-router-dom";
import Comment from "../Comment";

export default class Profile extends Component {
    constructor(props) {
        super(props);
        const userId = this.props.match ? this.props.match.params.id : null;
        this.state = {
            userId: userId,
            userProfile: null,
            isLoggedOut: false,
            comments: null,
            error: false
        }
    }

    componentDidMount() {
        UserService.fetchProfileForUser()
            .then(data => {
                    if (data === 401) {
                        this.setState({isLoggedOut: true})
                    }
                    else {
                        this.setState({userProfile: data})
                    }
                }
            );
        this.getCommentForUser();
    }

    getCommentForUser = () => {
        //Way to find the actual userId of the loggedIn user
        // Temp set it as 1 so work things
        let userId = this.state.userId !== null ? this.state.userId : 1;
        UserService.getCommentForUser(userId)
            .then(data => {
                if (data === 400) {
                    this.setState({
                        error: true
                    })
                }
                this.setState({
                    comments: data
                })
            })
    };

    formatCommentDate = (date) => {
        var newDate = (new Date(date));
        let formatedDate = (newDate.getMonth() + 1) + '/' + newDate.getDate() + '/' + newDate.getFullYear();
        return formatedDate;
    };

    render() {
        return (
            <div>
                {
                    this.state.isLoggedOut === false ?
                        <div className="profile-wrapper">
                            <h4 className="profile-header">Account Overview</h4>
                            {
                                this.state.userProfile === null ? <i>Loading...</i> :
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <div className="profile-body">
                                                <p className="text-green">Profile</p>
                                                <form role="form">
                                                    <div className="form-group">
                                                        <label className="control-label">First name</label>
                                                        <p id="profile-firstname">{this.state.userProfile.firstname}</p>
                                                    </div>

                                                    <div className="form-group">
                                                        <label className="control-label">Last name</label>
                                                        <p id="profile-lastname">{this.state.userProfile.lastname}</p>
                                                    </div>

                                                    <div className="form-group">
                                                        <label className="control-label">Email Address</label>
                                                        <p id="profile-email">{this.state.userProfile.email}</p>
                                                    </div>

                                                    <div className="form-group">
                                                        <label className="control-label">Username</label>
                                                        <p id="profile-username">{this.state.userProfile.username}</p>
                                                    </div>
                                                    <div>
                                                        <button className="btn__cta btn" type="button">
                                                            <Link to="/update/profile">Edit Profile</Link>
                                                        </button>

                                                        <button className="btn btn__cta mt-3"
                                                                type="button">Follow &nbsp;
                                                            {this.state.userProfile.username}
                                                        </button>

                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="profile-body">
                                                <p className="text-green">Details</p>
                                                <form role="form">
                                                    <div className="form-group">
                                                        <label className="control-label">Follower Count</label>
                                                        <p id="profile-followers">{this.state.userProfile.followerCount}</p>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="control-label">Following Count</label>
                                                        <p id="profile-following">{this.state.userProfile.followeeCount}</p>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="control-label">Subscriptions</label>
                                                        <p id="profile-subs">Click here to see your&nbsp;
                                                            <Link
                                                                to="/subscriptions" className="text-green">subscriptions
                                                            </Link>
                                                        </p>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-4">
                                            <div className="profile-body">
                                                <p className="text-green">Comments and Ratings</p>
                                                <form role="form">
                                                    <div className="form-group">
                                                        {this.state.comments === null ? <p><i>Loading...</i></p> :
                                                            <ul>{this.state.comments.length === 0 ?
                                                                <span className="help-text">No comments given by this user</span> : null}
                                                                {
                                                                    this.state.error === false &&
                                                                    this.state.comments.map((comment) =>
                                                                        <Comment comment={comment}
                                                                                 date={this.formatCommentDate(comment.createdOn)}
                                                                                 proComp={true}/>)
                                                                }
                                                            </ul>
                                                        }
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                            }
                        </div> :
                        <div>
                            <h3 className="mt-3">Profile</h3>
                            <p className="help-text text-white mt-3">Please <Link to="/login">Log In</Link> to see your
                                Profile</p>
                        </div>
                }
            </div>
        )
    }
}
