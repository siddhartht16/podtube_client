import React, {Component} from "react";
import UserService from "../services/UserService";
import {Link} from "react-router-dom";

export default class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userProfile: null,
            isLoggedOut: false,
            comments: null,
            email: "",
            password: "",
            firstname: "",
            lastname: "",
            error: false
        };
    }

    componentDidMount() {
        UserService.fetchProfileForUser().then(data => {
            if (data === 401) {
                this.setState({isLoggedOut: true});
            } else {
                this.setState({
                    userProfile: data,
                }, ()=>{
                   this.setState({
                       password: this.state.userProfile.user.password,
                       firstname: this.state.userProfile.user.firstname,
                       lastname: this.state.userProfile.user.lastname,
                       email: this.state.userProfile.user.email,
                   })
                });
            }
        });
    }

    onChangePassword = e => {
        this.setState({
            password: e.target.value,
        });
    };

    onChangeEmail = e => {
        this.setState({
            email: e.target.value,
        });
    };

    onChangeFirstName = e => {
        this.setState({
            firstname: e.target.value,
        });
    };

    onChangeLastName = e => {
        this.setState({
            lastname: e.target.value,
        });
    };

    onUpdateUserProfile = () => {
        let userObj = {
            'password': this.state.password,
            'firstname': this.state.firstname,
            'lastname': this.state.lastname,
            'email': this.state.email,
        };
        UserService.updateUserProfile(userObj)
            .then(data => {
                window.location.reload();
            })
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
                                                    value={this.state.userProfile.user.username}
                                                    className="form-control"
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label className="control-label">
                                                    Password
                                                </label>
                                                <input
                                                    id="profile-password"
                                                    value={this.state.password}
                                                    onChange={this.onChangePassword}
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
                                                    onChange={this.onChangeFirstName}
                                                    value={
                                                        this.state.firstname
                                                    }
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label className="control-label">
                                                    Last name
                                                </label>
                                                <input
                                                    id="profile-lastname"
                                                    value={this.state.lastname}
                                                    onChange={this.onChangeLastName}
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
                                                    onChange={this.onChangeEmail}
                                                    value={
                                                        this.state.email
                                                    }
                                                />
                                            </div>
                                            <div className="mt-4">
                                                <button
                                                    onClick={this.onUpdateUserProfile}
                                                    className="btn btn__cta"
                                                    type="button">
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
