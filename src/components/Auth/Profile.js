import React, {Component} from 'react'
import UserService from "../../services/UserService";

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        // UserService.fetchProfileForUser()
        //     .then(data => {
        //         console.log(data);
        //     });
    }

    render() {
        return (
            <div>
                <div className="profile-wrapper">
                    <h4 className="profile-header">Account Overview</h4>
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <div className="profile-body">
                                <p className="text-green">Profile</p>
                                <form role="form">
                                    <div className="form-group">
                                        <label className="control-label">First name</label>
                                        <p id="profile-firstname">Siddhant</p>
                                    </div>

                                    <div className="form-group">
                                        <label className="control-label">Last name</label>
                                        <p id="profile-lastname">Pasari</p>
                                    </div>

                                    <div className="form-group">
                                        <label className="control-label">Username</label>
                                        <p id="profile-username">Sidco0014</p>
                                    </div>

                                    <div className="form-group">
                                        <label className="control-label">Password</label>
                                        <p id="profile-password">Password123</p>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
