import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom'
import SubscriptionService from "../services/SubscriptionService";
import Podcast from "./Podcast";

export default class Subscription extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSubscribed:false,
            subscribedPodcasts:null,
        }
    }

    componentDidMount() {
        SubscriptionService.getAllUserSubscription()
            .then(res => {
                if(res === 401){
                    this.setState({
                        isSubscribed:true
                    })
                }
                else{
                    this.setState({
                        subscribedPodcasts:res
                    })
                }

            })
    }


    render() {
        return (
            <div>
                <h3 className="mt-3">Subscriptions</h3>
                {
                    this.state.isSubscribed === true ?
                        <p className="help-text mt-3">Please <Link to="/login">Log In</Link> to see your subscriptions</p> :
                        <div className="podcast-list">
                            {
                                this.state.subscribedPodcasts === null ? <p><i>Loading...</i></p>:
                                    <ul>
                                        {this.state.subscribedPodcasts.map((podcastObj) =>
                                            <Podcast podcast={podcastObj['podcast']} subComp={true}/>)
                                        }
                                    </ul>
                            }
                        </div>
                }
            </div>
        )
    }

}