import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom'
import './auth.style.css';

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

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
                                           placeholder="First Name" className="form-control input-fld"/>
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text"
                                           placeholder="Last Name" className="form-control input-fld"/>
                                </div>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text"
                                           placeholder="Enter Username" className="form-control input-fld"/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" placeholder="Password" className="form-control input-fld"/>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button type="submit" className="btn btn-warning">Sign Up</button>
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
