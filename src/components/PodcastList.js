import React, {Component} from 'react';
import PodcastService from '../services/PodcastService';
import Podcast from "./Podcast";
import "./PodcastList.style.css";
import {Link} from 'react-router-dom'

export default class PodcastList extends Component {
    constructor(props) {
        super(props);
        const categoryId = this.props.match ? this.props.match.params.id : null;
        this.state = {
            categoryId: categoryId,
            podcasts: null,
            searchedPodcast: ''
        }
    }

    getSearchedPodcastName = (e) => {
        this.setState({searchedPodcast: e.target.value});
    };

    componentDidMount() {
        if (this.state.categoryId !== null) {
            PodcastService.findPodcastForCategory(this.state.categoryId)
                .then(data => {
                    console.log("Podcast data");
                    console.log(data);
                    this.setState({podcasts: data})
                });
        }
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
                            {this.state.podcasts && this.state.podcasts.length ?
                                <ul>
                                    {this.state.podcasts.map((podcast) =>
                                        <Podcast podcast={podcast}
                                                 subComp={false}
                                                 genreId={this.state.genreId}/>)
                                    }
                                </ul> :
                                <i className="mt-3 no-data">No Podcasts available for the category</i>
                            }
                        </div>
                    </div>
                }
            </div>
        )
    }
}