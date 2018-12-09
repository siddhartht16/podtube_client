import React, {Component} from 'react'
import PodcastService from '../services/PodcastService';
import "./EpisodeList.style.css";
import Episode from "./Episode";
import PodcastIcon from '../assests/podcast-icon2.jpg';
import ReactPlayer from "react-player";

export default class EpisodeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            podcastId: this.props.match.params.podcastId,
            episodeList: null,
            episodeURL: null
        }
    }

    componentDidMount() {
        PodcastService.findEpisodesForPodcast(this.state.podcastId)
            .then(data => {
                console.log(data);
                this.setState({episodeList: data})
            });
    }

    getEpisodeAudio = (audioURL) => {
        if (audioURL.length === 0 || typeof audioURL === "undefined" || audioURL === null) {
            alert("No MP3 link for this episode")
        }
        else {
            this.setState({
                episodeURL: audioURL
            })
        }
    };

    render() {
        return (
            <div>
                {this.state.episodeList === null ? <p className="mt-5">Loading...</p> :
                    <div>
                        <div className="episode-list">
                            <ul>
                                {this.state.episodeList.map((episode) =>
                                    <Episode id={episode.id}
                                             title={episode.title}
                                             description={episode.description}
                                             thumbnail={episode.thumbnail}
                                             PodcastImg={PodcastIcon}
                                             getEpisodeAudio={() => this.getEpisodeAudio(episode.enclosureLink)}
                                             audioLength={episode.audio_length}/>)
                                }
                            </ul>
                        </div>
                        <ReactPlayer url={this.state.episodeURL}
                                     className="react-player fixed-bottom"
                                     controls
                                     playbackRate={1}/>
                    </div>
                }
            </div>
        )
    }
}
