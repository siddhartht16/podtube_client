import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom'
import AdminService from '../../services/AdminService';
import AdminEpisode from "./AdminEpisode";

export default class AdminPodcastDetail extends Component {
    constructor(props) {
        super(props);

        const podcastId = this.props.match.params.id ? this.props.match.params.id : null;

        this.state = {
            podcastId: podcastId,
            episodes: null
        }
    }

    componentDidMount() {
        AdminService.getEpisodesForPodcast(this.state.podcastId).then(
            episodes => {
                console.log(episodes);
                this.setState({episodes: episodes})
            }
        )
    }

    syncEpisodes = () => {
        AdminService.syncEpisodesForPodcast(this.state.podcastId).then(
            episodes => this.setState({episodes: episodes})
        )
    };

    render() {
        return (
            <div>
                <div className="sync-btn-wrapper pt-2 pb-2">
                    <button className="btn btn__alt" onClick={this.syncEpisodes}>Sync Episodes</button>
                </div>
                <div className="podcast-list">
                    {this.state.episodes === null ? <p className="mt-5">Loading...</p> :
                        <div>
                            <ul>
                                {this.state.episodes.map((episode) =>
                                    <AdminEpisode id={episode.id} title={episode.title}/>)
                                }
                            </ul>
                        </div>
                    }
                </div>
            </div>
        )
    }
}
