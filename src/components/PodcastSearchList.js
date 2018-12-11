import React, {Component} from 'react';
import PodcastService from '../services/PodcastService';
import Podcast from "./Podcast";
import {Link} from "react-router-dom";


export default class PodcastSearchList extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        let searchTerm = props.match.params.searchTerm;
        this.state = {
            searchTerm: searchTerm,
            podcastList: null,
            error: false
        }
    }

    componentDidMount = () => {
        if (this.state.searchTerm.length > 0) {
            PodcastService.searchPodcastList(this.state.searchTerm)
                .then(data => {
                    console.log(data);
                    if (data === 500 || data === 400 || data.length === 0) {
                        this.setState({error: true})
                    }
                    else {
                        this.setState({podcastList: data})
                    }
                });
        }
        else {
            this.setState({error: true})
        }

    };

    render() {
        return (
            <div>
                {this.state.podcastList === null ?
                    <p className="mt-3"><i>There was a problem loading the podcasts</i></p> :
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