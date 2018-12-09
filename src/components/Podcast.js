import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import "./PodcastList.style.css";
import SubscriptionService from "../services/SubscriptionService";
import PodcastIcon2 from "../assests/podcast-icon.png";


export default class Podcast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            podcast: this.props.podcast,
            error: false
        }
    }

    onSubscribe = (podcast_id) => {
        SubscriptionService.subscribeUser(podcast_id)
            .then(podcast => {
                if (podcast === 401) {
                    this.setState({
                        error: true
                    })
                }
                else {
                    this.setState({podcast: podcast, error: false})
                }
            }).catch(err => {
            console.log(err);
        });
        alert("Subscribed successfully for podcast id: " + podcast_id);
    };

    onUnsubscribe = (podcast_id) => {
        SubscriptionService.unSubscribeUser(podcast_id)
            .then(podcast => {
                if (podcast === 401) {
                    this.setState({error: true})
                }
                else {
                    this.setState({podcast: podcast, error: false})
                }
            }).catch(err => {
            console.log(err);
        });
        alert("unSubscribed successfully for podcast id: " + podcast_id);
    };

    render() {
        const error = this.state.error;
        if (error === true) {
            return <Redirect to="/login"/>
        }
        return (
            <div>
                <li key={this.state.podcast.id}>
                    <Link to={`/podcast/${this.state.podcast.id}/episodes`}>
                        <img src={this.state.podcast.logo_url === 'null' ? PodcastIcon2 : this.state.podcast.logo_url} className="podcast-thumbnail"/>
                        {this.state.podcast.title}
                    </Link>
                    {
                        this.props.subComp === false ?

                            <span>
                                    {this.state.podcast.subscribed === true ?
                                        <button className="btn__alt sub float-right"
                                                onClick={() => this.onUnsubscribe(this.state.podcast.id)}>Unsubscribe</button> :
                                        <button className="btn__alt unsub float-right"
                                                onClick={() => this.onSubscribe(this.state.podcast.id)}>Subscribe</button>
                                    }
                                </span> : null
                    }

                </li>

            </div>
        )
    }
}
