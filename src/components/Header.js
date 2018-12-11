import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserService from "../services/UserService";
import * as utils from "../common/utils";

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    logoutUser = () => {
        UserService.logoutUser();
        utils.clearUserDataFromLocal();
        console.log("User logged out");
    };

    render() {
        return (
            <header className="App-header">
                <div className="row">
                    <div className="col-md-10">
                        <h2>{this.props.text}</h2>
                    </div>
                    <div className="col-md-2">
                        <Link
                            className="logout"
                            onClick={this.logoutUser}
                            to="/categories"
                        >
                            Logout
                        </Link>
                        <Link className="logout" to="/login">
                            Login
                        </Link>
                        <Link to="/register" className="logout">
                            Register
                        </Link>
                    </div>
                </div>
            </header>
        );
    }
}
