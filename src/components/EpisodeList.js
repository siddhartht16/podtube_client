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
            episodeURL: null,
            podcastDetails: null
        }
    }

    componentDidMount() {
        PodcastService.findEpisodesForPodcast(this.state.podcastId)
            .then(data => {
                console.log(data[0].podcast);
                this.setState({
                    episodeList: data,
                    podcastDetails: data[0].podcast
                })
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
        const subCount = {
            marginBottom: '10px', color: '#7f858f', fontWeight: 500, fontSize: '14px', lineHeight: '20px'
        };
        return (
            <div className="outer-wrapper">
                {this.state.episodeList === null ? <p className="mt-5">Loading...</p> :
                    <div>
                        <div className="podcast-details">
                            <h3>Podcast Details</h3>
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={this.state.podcastDetails.logo_url} className="podcast-img"/>
                                </div>
                                <div className="col-md-9">
                                    <h5>{this.state.podcastDetails.title}</h5>
                                    <p>{this.state.podcastDetails.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="episode-list">
                            <div className="episode-header">
                                <h4>Episodes</h4>
                                <p style={subCount}>Total Episodes : {this.state.episodeList.length}</p>
                            </div>
                            <ul>
                                {this.state.episodeList.map((episode) =>
                                    <Episode id={episode.id}
                                             podcastDetails={this.state.podcastDetails}
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
