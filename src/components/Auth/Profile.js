import React, {Component} from 'react'
import UserService from "../../services/UserService";

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userProfile: null
        }
    }

    componentDidMount() {
        UserService.fetchProfileForUser()
            .then(data => {
                console.log(data);
                this.setState({
                    userProfile: data
                })
            });
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
                                {
                                    this.state.userProfile === null ? <i>Loading...</i> :
                                        <form role="form">
                                            <div className="form-group">
                                                <label className="control-label">First name</label>
                                                <p id="profile-firstname">{this.state.userProfile.firstname}</p>
                                            </div>

                                            <div className="form-group">
                                                <label className="control-label">Last name</label>
                                                <p id="profile-lastname">{this.state.userProfile.lastname}</p>
                                            </div>

                                            <div className="form-group">
                                                <label className="control-label">Username</label>
                                                <p id="profile-username">{this.state.userProfile.username}</p>
                                            </div>
                                        </form>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
