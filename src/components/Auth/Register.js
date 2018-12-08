import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom'
import './auth.style.css';
import UserService from "../../services/UserService";

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            password: '',
        };
    }

    onChangeFirstName = (e) => {
        this.setState({
            firstname: e.target.value,
        });
    };

    onChangeLastName = (e) => {
        this.setState({
            lastname: e.target.value,
        });
    };

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

    registerUser = () => {
        let userObject = {
            'firstname': this.state.firstname,
            'lastname': this.state.lastname,
            'username': this.state.username,
            'password': this.state.password,
            'userRole': 'USER'
        };
        UserService.registerUser(userObject).then(
            data => {
                console.log(data);
            }
        )
    };


    componentDidMount() {

    }

    render() {
        return (
            <div className="row mt-3">
                <div className="col-md-6 col-sm-6 ml-auto mr-auto">
                    <form className="form" method="" action="">
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
                                           className="form-control input-fld"/>
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text"
                                           placeholder="Last Name"
                                           id="lastname"
                                           onChange={this.onChangeLastName}
                                           value={this.state.lastname}
                                           className="form-control input-fld"/>
                                </div>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text"
                                           id="username"
                                           onChange={this.onChangeUsername}
                                           value={this.state.username}
                                           placeholder="Enter Username"
                                           className="form-control input-fld"/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password"
                                           id="password"
                                           onChange={this.onChangePassword}
                                           value={this.state.password}
                                           placeholder="Password"
                                           className="form-control input-fld"/>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button type="submit"
                                        onClick={this.registerUser}
                                        className="btn btn-warning">Sign Up</button>
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
