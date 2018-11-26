import React, {Component} from 'react';
import PodcastService from '../services/PodcastService';
import Genre from "./Genre";
import Podcast from "./Podcast";
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
            .then(data => this.setState({podcasts: data}));
    }

    render() {
        return (
            <div>
                {this.state.podcasts === null ? <h4 className="text-center mt-5"><i>Loading...</i></h4> :
                    <div>
                        <input type="text"
                               className="mt-5 form-control"
                               value={this.state.searchedPodcast}
                               onChange={this.getSearchedPodcastName}/>
                        <Link to={`/search/${this.state.searchedPodcast}`}>
                            <button className="btn btn-success mt-2"
                                    onClick={this.onSubmitPodcastName}>Search
                            </button>
                        </Link>
                        <h2 className="mt-3">Select your Podcast from the list:</h2>
                        <ul>
                            {this.state.podcasts['channels'].map((podcast) =>
                                <Podcast podcastId={podcast.id}
                                         title={podcast.title}
                                         genreId={this.state.genreId}/>)
                            }
                        </ul>
                    </div>
                }
            </div>
        )
    }
}