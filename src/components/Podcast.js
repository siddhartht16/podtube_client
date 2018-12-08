import React from 'react'
import {Link} from 'react-router-dom'
import "./PodcastList.style.css";

const Podcast = ({podcastId, onSubscribe, onUnsubscribe, subscribed, title}) =>
    <div>
        <li key={podcastId}>
            <Link to={`/podcast/${podcastId}/episodes`}>{title}</Link>
            {
                subscribed === true ?
                    <button className="btn__alt sub float-right" onClick={onUnsubscribe}>Unsubscribe</button> :
                    <button className="btn__alt unsub float-right" onClick={onSubscribe}>Subscribe</button>
            }
        </li>
    </div>;


export default Podcast
