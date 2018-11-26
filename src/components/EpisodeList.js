import React, {Component} from 'react'
import PodcastService from '../services/PodcastService';
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
        console.log(this.state.podcastId);
        PodcastService.findEpisodesForPodcast(this.state.podcastId)
            .then(data => {
                console.log(data);
                this.setState({episodeList: data})
            });

    }

    render() {
        return (
            <div>
                {this.state.episodeList === null ? <h4 className="text-center mt-5"><i>Loading...</i></h4> :
                    <div>
                        <ul>
                            {this.state.episodeList['episodes'].map((episode) =>
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
