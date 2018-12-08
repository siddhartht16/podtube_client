import React, {Component} from 'react'
import PodcastService from '../services/PodcastService';
import "./EpisodeList.style.css";
import Episode from "./Episode";

export default class EpisodeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            podcastId: this.props.match.params.podcastId,
            episodeList: null,
        }
    }

    componentDidMount() {
        PodcastService.findEpisodesForPodcast(this.state.podcastId)
            .then(data => {
                console.log(data);
                this.setState({episodeList: data})
            });
    }

    render() {
        return (
            <div>
                {this.state.episodeList === null ? <p className="mt-5">Loading...</p> :
                    <div className="episode-list">
                        <ul>
                            {this.state.episodeList.map((episode) =>
                                <Episode id={episode.id}
                                         title={episode.title}
                                         description={episode.description}
                                         thumbnail={episode.thumbnail}
                                         audio={episode.audio}
                                         audioLength={episode.audio_length}/>)
                            }
                        </ul>
                    </div>
                }
            </div>
        )
    }
}
