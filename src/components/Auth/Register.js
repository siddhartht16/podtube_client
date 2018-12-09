import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom'
import './auth.style.css';
import UserService from "../../services/UserService";

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            isRegistered: false,
            error: false
        };
    }

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value,
            error: false
        });
    };

    onChangePassword = (e) => {
        this.setState({
            password: e.target.value,
            error: false
        });
    };

    onChangeFirstName = (e) => {
        this.setState({
            firstname: e.target.value,
            error: false
        });
    };

    onChangeLastName = (e) => {
        this.setState({
            lastname: e.target.value,
            error: false
        });
    };

    registerUser = () => {
        if (this.state.username.length === 0 ||
            this.state.password.length === 0 ||
            this.state.firstname.length === 0 ||
            this.state.lastname.length === 0) {
            return false;
        }
        else {
            let userObject = {
                'username': this.state.username,
                'password': this.state.password,
                'firstname': this.state.firstname,
                'lastname': this.state.lastname,
            };
            UserService.registerUser(userObject).then(
                data => {
                    if (data === 401 || data === 400) {
                        this.setState({
                            error: true
                        });
                    }
                    else {
                        this.setState({
                            isRegistered: true
                        })
                    }
                }
            )
        }
    };

    redirectAfterRegister = () => {
        setTimeout(function () {
            window.location = '/categories'
        }, 2000)
    };


    render() {
        const isRegistered = this.state.isRegistered;
        if (isRegistered === true) {
            this.redirectAfterRegister()
        }
        return (
            <div className="row mt-3">
                <div className="col-md-6 col-sm-6 ml-auto mr-auto">
                    {
                        this.state.isRegistered === true ?
                            <div className="alert alert-success" role="alert">
                                Successfully registered. Please wait while we redirect you....
                            </div> : null
                    }
                    {
                        this.state.error === true ?
                            <div className="alert alert-danger" role="alert">
                                Some error occurred while registering. Please try again
                            </div> : null
                    }

                    <form className="form">
                        <div className="card card-auth">
                            <div className="card-header ">
                                <h3 className="header text-center">Register</h3>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text"
                                           id="firstname"
                                           value={this.state.firstname}
                                           onChange={this.onChangeFirstName}
                                           placeholder="First Name"
                                           required
                                           className="form-control input-fld"/>
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text"
                                           placeholder="Last Name"
                                           id="lastname"
                                           onChange={this.onChangeLastName}
                                           value={this.state.lastname}
                                           required
                                           className="form-control input-fld"/>
                                </div>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text"
                                           id="username"
                                           onChange={this.onChangeUsername}
                                           value={this.state.username}
                                           placeholder="Username"
                                           required
                                           className="form-control input-fld"/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password"
                                           id="password"
                                           onChange={this.onChangePassword}
                                           value={this.state.password}
                                           placeholder="Password"
                                           required
                                           className="form-control input-fld"/>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button onClick={this.registerUser}
                                        type="button"
                                        className="btn btn-warning">Sign Up
                                </button>
                                <div className="register-promt mt-4">
                                    <p className="text-center">Already have an account ? </p>
                                    <button className="btn btn__alt">
                                        <Link to="/login">
                                            Sign in on PodTube
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
