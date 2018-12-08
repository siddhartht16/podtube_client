import React, {Component} from 'react';
import './AdminLogin.style.css';
export default class AdminLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = () => {

    };

    render() {
        return (
            <div>
                <div className="admin-login-wrapper mt-3">
                    <form className="form" method="" action="">
                        <div className="card">
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
                                {/*<p className="forgot-password text-center pt-3">*/}
                                    {/*Forgot Your Password ?*/}
                                {/*</p>*/}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}