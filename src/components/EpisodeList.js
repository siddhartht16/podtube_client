import React, {Component} from 'react'
import PodcastService from '../services/PodcastService';
import "./EpisodeList.style.css";
import Episode from "./Episode";
import PodcastIcon from '../assests/podcast-icon2.jpg';
import ReactPlayer from "react-player";
import PodcastIcon2 from '../assests/podcast-icon.png';
import CommentWrapper from "./CommentWrapper";

export default class EpisodeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            podcastId: this.props.match.params.podcastId,
            episodeList: null,
            episodeURL: null,
            podcastDetails: null,
            showComments: false,
            showCommentAddForm: false
        }
    }

    componentDidMount() {
        PodcastService.findEpisodesForPodcast(this.state.podcastId)
            .then(data => {
                this.setState({
                    episodeList: data,
                    podcastDetails: data.length !== 0 ? data[0].podcast : null
                })
            });
    }

    getEpisodeAudio = (audioURL) => {
        if (audioURL.length === 0 || typeof audioURL === "undefined" || audioURL === null) {
            alert("No MP3 link for this episode")
        }
        else {
            this.setState({episodeURL: audioURL})
        }
    };

    toggleCommentsSection = () => {
        const doesRender = this.state.showComments;
        if (doesRender) {
            this.setState({
                showComments: false,
            });
        }
        else {
            this.setState({
                showComments: true,
                showCommentAddForm: false,
            });
        }
    };

    toggleCommentsFormSection = () => {
        const doesRender = this.state.showCommentAddForm;
        if (doesRender) {
            this.setState({
                showCommentAddForm: false,
            });
        }
        else {
            this.setState({
                showCommentAddForm: true,
                showComments: false
            });
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
                        {
                            this.state.podcastDetails !== null ?
                                <div className="podcast-details">
                                    <h3>Podcast Details</h3>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <img src={this.state.podcastDetails.logo_url} className="podcast-img"/>
                                        </div>
                                        <div className="col-md-9">
                                            <h5>{this.state.podcastDetails.title}</h5>
                                            <p>{this.state.podcastDetails.description}</p>
                                            <button className="podcast-comments-btn"
                                                    onClick={this.toggleCommentsSection}>Comments
                                            </button>

                                            <button className="podcast-comments-btn ml-3"
                                                    onClick={this.toggleCommentsFormSection}
                                                    type="button">Add Comment
                                            </button>
                                        </div>
                                    </div>
                                    {
                                        this.state.showComments === true ?
                                            <CommentWrapper
                                                isCommentForm={false}
                                                title="Comments"/> : null
                                    }
                                    {
                                        this.state.showCommentAddForm === true ?
                                            <CommentWrapper
                                                isCommentForm={true}
                                                title="Add Comment"/> : null
                                    }

                                </div> : null
                        }
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
