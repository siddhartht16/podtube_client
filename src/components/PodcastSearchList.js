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
            podcastList: null
        }
    }

    componentDidMount = () => {
        PodcastService.searchPodcastList(this.state.searchTerm)
            .then(data => {
                console.log(data);
                this.setState({podcastList: data})
            });
    };

    render() {
        return (
            <div>
                {this.state.podcastList === null ? <p className="mt-5"><i>Loading...</i></p> :
                    <div className="podcast-list">
                        <h3 className="mt-3">Select a podcast to view episodes</h3>
                        <ul>
                            {this.state.podcastList.map((podcast) =>
                                <Podcast
                                    subComp={false}
                                    podcast={podcast}/>)
                            }
                        </ul>
                    </div>
                }
            </div>
        )
    }

}