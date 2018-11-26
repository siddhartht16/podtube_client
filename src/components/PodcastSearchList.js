import React, {Component} from 'react';
import PodcastService from '../services/PodcastService';
import Podcast from "./Podcast";
import {Link} from "react-router-dom";


export default class PodcastSearchList extends Component {
    constructor(props) {
        super(props);
        let searchTerm = this.props.match.params.searchTerm;
        searchTerm = searchTerm.replace('%20', ' ');
        this.state = {
            searchTerm: searchTerm,
            podcastList:null
        }
    }

    componentDidMount = () => {
        PodcastService.searchPodcastList(this.state.searchTerm)
            .then(data => {console.log(data);
                            this.setState({podcastList: data})});
    };

    render() {
        return (
            <div>
                {this.state.podcastList === null ? <h4 className="text-center mt-5"><i>Loading...</i></h4> :
                    <div>
                        <h2 className="mt-3">Select your Podcast from the list:</h2>
                        <ul>
                            {this.state.podcastList['results'].map((podcast) =>
                                <Podcast podcastId={podcast.id}
                                         title={podcast.title_original}/>)
                            }
                        </ul>
                    </div>
                }
            </div>
        )
    }

}