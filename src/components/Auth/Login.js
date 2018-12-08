import React, {Component} from 'react'
import './auth.style.css';
import {Link} from "react-router-dom";
import UserService from "../../services/UserService";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value,
        });
    };

    onChangePassword = (e) => {
        this.setState({
            password: e.target.value,
        });
    };

    loginUser = () => {

        if (this.state.username === null ||
            this.state.password === null ||
            this.state.password.length === 0 ||
            this.state.username.length === 0) {
            return false;
        }
        else {
            let userObject = {
                'username': this.state.username,
                'password': this.state.password,
                'userRole': 'USER'
            };

            UserService.loginUser(userObject)
                .then(data => {
                    console.log(data);
                })
        }
    };

    render() {
        return (
            <div className="row mt-3">
                <div className="col-md-6 col-sm-6 ml-auto mr-auto">
                    <form className="form">
                        <div className="card card-auth">
                            <div className="card-header ">
                                <h3 className="header text-center">Login</h3>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text"
                                           id="username"
                                           onChange={this.onChangeUsername}
                                           value={this.state.username}
                                           placeholder="Enter Username"
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
                                <button type="submit"
                                        className="btn btn-warning"
                                        onClick={this.loginUser}>
                                    Login
                                </button>
                                <p className="forgot-password text-center pt-3">
                                    Forgot Your Password ?
                                </p>
                                <div className="register-promt">
                                    <p className="text-center">Don't have an account ? </p>
                                    <button className="btn btn__alt"><Link to="/register">
                                        Sign up on PodTube
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
