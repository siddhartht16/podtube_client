import React, {Component} from 'react'
import UserService from "../../services/UserService";
import {Link} from "react-router-dom";

export default class Profile extends Component {
    constructor(props) {
        super(props);
        const userId = this.props.match ? this.props.match.params.id : null;
        this.state = {
            userId: userId,
            userProfile: null,
            isLoggedOut: false
        }
    }

    componentDidMount() {
        UserService.fetchProfileForUser()
            .then(data => {
                console.log(data);
                    if (data === 401) {
                        this.setState({isLoggedOut: true})
                    }
                    else {
                        this.setState({userProfile: data})
                    }
                }
            );
    }

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
                                                        <label className="control-label">Username</label>
                                                        <p id="profile-username">{this.state.userProfile.username}</p>
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
                                    </div>
                            }
                        </div> :
                        <div>
                            <h3 className="mt-3">Profile</h3>
                            <p className="help-text mt-3">Please <Link to="/login">Log In</Link> to see your Profile</p>
                        </div>
                }
            </div>
        )
    }
}
