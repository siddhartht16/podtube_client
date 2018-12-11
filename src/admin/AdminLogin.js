import React, { Component } from "react";
import "./AdminLogin.style.css";
import AdminService from "../services/AdminService";

export default class AdminLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            isLoggedIn: false,
            username: "",
            password: ""
        };

        this.loginAdmin = this.loginAdmin.bind(this);
    }

    setUserIdInLocal = user => {
        localStorage.setItem("user_id", user.id);
    };


    componentDidMount = () => {};

    onChangeUsername = e => {
        this.setState({
            username: e.target.value,
            error: false
        });
    };

    onChangePassword = e => {
        this.setState({
            password: e.target.value,
            error: false
        });
    };

    loginAdmin = () => {
        if (
            this.state.username === null ||
            this.state.password === null ||
            this.state.password.length === 0 ||
            this.state.username.length === 0
        ) {
            return false;
        } else {
            let userObject = {
                username: this.state.username,
                password: this.state.password,
                userRole: "ADMIN"
            };

            AdminService.loginAdmin(userObject).then(data => {
                if (data === 401 || data === 400) {
                    this.setState({
                        error: true
                    });
                } else {
                    this.setState({
                        isLoggedIn: true
                    });
                    this.setUserIdInLocal(data);
                }
            });
        }
    };

    redirectAfterLogin = () => {
        setTimeout(function() {
            window.location = "/admin/dashboard";
        }, 2000);
    };

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        if (isLoggedIn === true) {
            this.redirectAfterLogin();
        }
        return (
            <div className="mt-5 row">
                <div className="col-md-6 col-sm-6 ml-auto mr-auto">
                    {this.state.isLoggedIn === true ? (
                        <div className="alert alert-success" role="alert">
                            Successfully loggedIn. Please wait while we redirect
                            you....
                        </div>
                    ) : null}
                    {this.state.error === true ? (
                        <div className="alert alert-danger" role="alert">
                            Some error occurred while logging In. Please try
                            again
                        </div>
                    ) : null}
                    <form className="form">
                        <div className="card card-auth">
                            <div className="card-header ">
                                <h3 className="header text-center">
                                    Admin Login
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Username</label>
                                    <input
                                        type="text"
                                        id="username"
                                        onChange={this.onChangeUsername}
                                        value={this.state.username}
                                        placeholder="Enter Username"
                                        required
                                        className="form-control input-fld"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        onChange={this.onChangePassword}
                                        value={this.state.password}
                                        placeholder="Password"
                                        required
                                        className="form-control input-fld"
                                    />
                                </div>
                            </div>
                            <div className="card-footer">
                                <button
                                    className="btn btn-warning mb-2"
                                    type="button"
                                    onClick={this.loginAdmin}
                                >
                                    Login
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
