import React, {Component} from 'react';
import PodcastService from '../services/PodcastService';
import Podcast from "./Podcast";
import "./PodcastList.style.css";
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom'

export default class PodcastList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            genreId: this.props.match.params.id,
            podcasts: null,
            searchedPodcast: ''
        }
    }

    getSearchedPodcastName = (e) => {
        this.setState({searchedPodcast: e.target.value});
    };

    componentDidMount() {
        console.log(this.state.genreId);
        PodcastService.findPodcastForGenre(this.state.genreId)
            .then(data => {
                console.log(data);
                this.setState({podcasts: data})
            });
    }

    render() {
        return (
            <div>
                {this.state.podcasts === null ? <p className="mt-5">Loading...</p> :
                    <div>
                        <div className="input-group mt-3">
                            <input type="text"
                                   className="search-podcast"
                                   value={this.state.searchedPodcast}
                                   placeholder="Search Podcasts"
                                   onChange={this.getSearchedPodcastName}/>
                            <span className="input-group-btn">
                            <Link to={`/search/${this.state.searchedPodcast}`}>
                                <span className="fa fa-search search-icon"
                                      role="button"
                                      title="Search"
                                      onClick={this.onSubmitPodcastName}>
                                </span>
                            </Link>
                            </span>
                        </div>
                        <h3 className="mt-3">Select a podcast to view episodes</h3>
                        <div className="podcast-list">
                            <ul>
                                {this.state.podcasts['channels'].map((podcast) =>
                                    <Podcast podcastId={podcast.id}
                                             title={podcast.title}
                                             genreId={this.state.genreId}/>)
                                }
                            </ul>
                        </div>
                    </div>
                }
            </div>
        )
    }
}