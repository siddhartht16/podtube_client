import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom'
import UserService from "../services/UserService";

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedOut: false
        }
    }

    logoutUser = () => {
        UserService.logoutUser();
        console.log("User logged out");
        this.setState({
            loggedOut: true
        })
    };

    render() {
        // const loggedOut = this.state.loggedOut;
        // if (loggedOut === true) {
        //     return <Redirect to="/login"/>
        // }
        return (
            <header className="App-header">
                <div className="row">
                    <div className="col-md-10">
                        <h2>{this.props.text}</h2>
                    </div>
                    <div className="col-md-2">
                        <h6 className="logout" onClick={this.logoutUser}>Logout</h6>
                        <h6 className="logout"><Link to="/login">Login</Link></h6>
                        <h6 className="logout"><Link to="/register">Register</Link></h6>
                    </div>
                </div>
            </header>
        )
    }
}
