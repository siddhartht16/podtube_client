import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom'
import SubscriptionService from "../services/SubscriptionService";
import Podcast from "./Podcast";

export default class Subscription extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedOut: false,
            subscribedPodcasts: null,
        }
    }

    componentDidMount() {
        SubscriptionService.getAllUserSubscription()
            .then(res => {
                if (res === 401) {
                    this.setState({
                        isLoggedOut: true
                    })
                }
                else {
                    this.setState({
                        subscribedPodcasts: res
                    })
                }

            })
    }


    render() {
        const subCount = {
            marginBottom: '15px',
            color: '#7f858f',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '20px'
        };
        return (
            <div>
                <h3 className="mt-3">Subscriptions</h3>
                {
                    this.state.isLoggedOut === true ?
                        <p className="help-text mt-3">Please <Link to="/login">Log In</Link> to see your subscriptions
                        </p> :
                        <div className="podcast-list">
                            {
                                this.state.subscribedPodcasts === null ? <p><i>Loading...</i></p> :
                                    <div>
                                        <p style={subCount}>Total Subscription
                                            : {this.state.subscribedPodcasts.length}</p>
                                        <ul>
                                            {this.state.subscribedPodcasts.map((podcastObj) =>
                                                <Podcast podcast={podcastObj['podcast']} subComp={true}/>)
                                            }
                                        </ul>
                                    </div>
                            }
                        </div>
                }
            </div>
        )
    }

}