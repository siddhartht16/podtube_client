import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import "./PodcastList.style.css";
import SubscriptionService from "../services/SubscriptionService";


export default class Podcast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            podcast: this.props.podcast,
            error: false
        }
    }

    onSubscribe = (podcast_id) => {
        // alert("Subscribed successfully for podcast id: " + podcast_id);
        SubscriptionService.subscribeUser(podcast_id)
            .then(podcast => {
                if (podcast === 401 || podcast === 400) {
                    this.setState({
                        error: true
                    })
                }
                else {
                    this.setState({podcast: podcast})
                }
            }).catch(err => {
            console.log(err);
        })
    };

    onUnsubscribe = (podcast_id) => {
        // alert("unSubscribed successfully for podcast id: " + podcast_id);
        SubscriptionService.unSubscribeUser(podcast_id)
            .then(podcast => {
                if (podcast === 401 || podcast === 400) {
                    this.setState({
                        error: true
                    })
                }
                else {
                    this.setState({podcast: podcast})
                }
            }).catch(err => {
            console.log(err);
        })
    };

    render() {
        const error = this.state.error;
        if (error === true) {
            return <Redirect to="/login"/>
        }
        return (
            <div>
                <li key={this.state.podcast.id}>
                    <Link to={`/podcast/${this.state.podcast.id}/episodes`}>{this.state.podcast.title}</Link>
                    {
                        this.state.podcast.subscribed === true ?
                            <button className="btn__alt sub float-right"
                                    onClick={() => this.onUnsubscribe(this.state.podcast.id)}>Unsubscribe</button> :
                            <button className="btn__alt unsub float-right"
                                    onClick={() => this.onSubscribe(this.state.podcast.id)}>Subscribe</button>
                    }
                </li>
            </div>
        )
    }

}


// const Podcast = ({podcastId, onSubscribe, onUnsubscribe, subscribed, title}) =>
{/*<div>*/
}
{/*<li key={podcastId}>*/
}
{/*<Link to={`/podcast/${podcastId}/episodes`}>{title}</Link>*/
}
{/*{*/
}
{/*subscribed === true ?*/
}
{/*<button className="btn__alt sub float-right" onClick={onUnsubscribe}>Unsubscribe</button> :*/
}
{/*<button className="btn__alt unsub float-right" onClick={onSubscribe}>Subscribe</button>*/
}
{/*}*/
}
{/*</li>*/
}
{/*</div>;*/
}
//
//
// export default Podcast
