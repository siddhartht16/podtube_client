import React, {Component} from 'react'
import UserService from "../../services/UserService";
import {Link} from "react-router-dom";

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userProfile: null,
            isLoggedIn: false
        }
    }

    componentDidMount() {
        UserService.fetchProfileForUser()
            .then(data => {
                    if (data === 401) {
                        this.setState({isLoggedIn: true})
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
                    this.state.isLoggedIn === false ?
                        <div className="profile-wrapper">
                            <h4 className="profile-header">Account Overview</h4>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <div className="profile-body">
                                        <p className="text-green">Profile</p>
                                        {
                                            this.state.userProfile === null ? <i>Loading...</i> :
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
                                        }
                                    </div>
                                </div>
                            </div>
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
