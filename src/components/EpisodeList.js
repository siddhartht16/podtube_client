import React, { Component } from "react";
import PropTypes from "prop-types";
import PodcastService from "../services/PodcastService";
import "./EpisodeList.style.css";
import Episode from "./Episode";
import PodcastIcon from "../assests/podcast-icon2.jpg";
import CommentWrapper from "./CommentWrapper";
import * as utils from "../common/utils";
import PlayerWrapper from "./PlayerWrapper";
import _ from "lodash";

export default class EpisodeList extends Component {
    constructor(props) {
        super(props);
        utils.logToConsole(props);
        this.state = {
            podcastId: this.props.podcastId, //.params.podcastId,
            episodeList: null,
            selectedEpisode: null,
            selectedEpisodeURL: null,
            podcastDetails: null,
            showComments: false,
            showCommentAddForm: false
        };
    }

    componentDidMount() {
        PodcastService.getPodcast(this.state.podcastId).then(data => {
            utils.logToConsole(data);
            this.setState(
                {
                    podcastDetails: data
                },
                () => {
                    PodcastService.findEpisodesForPodcast(
                        this.state.podcastId
                    ).then(data => {
                        utils.logToConsole(data);
                        this.setState({
                            episodeList: data
                        });
                    });
                }
            );
        });
    }

    getEpisodeAudio = episode => {
        const episodeMediaUrl = episode.enclosureLink;
        if (_.isEmpty(episodeMediaUrl)) {
            alert("No media found for this episode");
            return;
        } else {
            console.log(episodeMediaUrl);
            this.setState({
                selectedEpisodeURL: episodeMediaUrl,
                selectedEpisode: episode
            });
        }
    };

    toggleCommentsSection = () => {
        const doesRender = this.state.showComments;
        if (doesRender) {
            this.setState({
                showComments: false
            });
        } else {
            this.setState({
                showComments: true,
                showCommentAddForm: false
            });
        }
    };

    toggleCommentsFormSection = () => {
        const doesRender = this.state.showCommentAddForm;
        if (doesRender) {
            this.setState({
                showCommentAddForm: false
            });
        } else {
            this.setState({
                showCommentAddForm: true,
                showComments: false
            });
        }
    };

    render() {
        const subCount = {
            marginBottom: "10px",
            color: "#7f858f",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "20px"
        };
        return (
            <div className="outer-wrapper">
                {this.state.episodeList === null ? (
                    <p className="mt-5">Loading...</p>
                ) : (
                    <div>
                        {this.state.podcastDetails !== null ? (
                            <div className="podcast-details">
                                <h3>{this.state.podcastDetails.title}</h3>
                                <div className="row">
                                    <div className="col-md-3">
                                        <img
                                            src={
                                                this.state.podcastDetails
                                                    .logo_url
                                            }
                                            className="podcast-img"
                                        />
                                    </div>
                                    <div className="col-md-9">
                                        <p>
                                            {
                                                this.state.podcastDetails
                                                    .description
                                            }
                                        </p>
                                        <button
                                            className="podcast-comments-btn"
                                            onClick={this.toggleCommentsSection}
                                        >
                                            Comments
                                        </button>

                                        <button
                                            className="podcast-comments-btn ml-3"
                                            onClick={
                                                this.toggleCommentsFormSection
                                            }
                                            type="button"
                                        >
                                            Add Comment
                                        </button>
                                    </div>
                                </div>
                                {this.state.showComments === true ? (
                                    <CommentWrapper
                                        isCommentForm={false}
                                        podcastId={this.state.podcastId}
                                        title="Comments"
                                    />
                                ) : null}
                                {this.state.showCommentAddForm === true ? (
                                    <CommentWrapper
                                        isCommentForm={true}
                                        podcastId={this.state.podcastId}
                                        title="Add Comment"
                                    />
                                ) : null}
                            </div>
                        ) : null}
                        <div className="episode-list">
                            <div className="episode-header">
                                <h4>Episodes</h4>
                                <p style={subCount}>
                                    Total Episodes :{" "}
                                    {this.state.episodeList.length}
                                </p>
                            </div>
                            <ul>
                                {this.state.episodeList.map(
                                    (episode, index) => (
                                        <Episode
                                            key={index}
                                            episode={episode}
                                            podcastDetails={
                                                this.state.podcastDetails
                                            }
                                            PodcastImg={PodcastIcon}
                                            getEpisodeAudio={() =>
                                                this.getEpisodeAudio(episode)
                                            }
                                        />
                                    )
                                )}
                            </ul>
                        </div>
                        <PlayerWrapper
                            mediaUrl={this.state.selectedEpisodeURL}
                            episode={this.state.selectedEpisode}
                        />
                    </div>
                )}
            </div>
        );
    }
}

EpisodeList.propTypes = {
    podcastId: PropTypes.number
};
