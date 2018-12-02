import React, {Component} from 'react'
import './auth.style.css';
import {Link} from "react-router-dom";

export default class Login extends Component {
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
                                <h3 className="header text-center">Login</h3>
                            </div>
                            <div className="card-body">
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
                                <button type="submit" className="btn btn-warning">Login</button>
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
