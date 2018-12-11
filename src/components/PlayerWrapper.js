import React, { Component } from "react";
import ReactPlayer from "react-player";
import * as utils from "../common/utils";
import RecentlyPlayedService from "../services/RecentlyPlayedService";

export default class PlayerWrapper extends Component {
    constructor(props) {
        super(props);
        utils.logToConsole(props);
        this.state = {
            mediaUrl: this.props.mediaUrl,
            episode: this.props.episode
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        utils.logToConsole("pw", nextProps.mediaUrl);
        if (this.state.mediaUrl !== nextProps.mediaUrl) {
            this.setState({
                mediaUrl: nextProps.mediaUrl,
                episode: nextProps.episode
            });
        }
    }

    onStart = () => {
        utils.logToConsole("ON start");
    };
    onPlay = () => {
        utils.logToConsole("ON play");
        RecentlyPlayedService.createUserHistoryItem(this.state.episode.id).then(
            res => {
                if (res === 401) {
                    utils.logToConsole("User not logged in.");
                } else {
                    utils.logToConsole("User logged in.");
                }
            }
        );
    };
    onEnd = () => {
        utils.logToConsole("ON end");
    };
    onError = () => {
        alert("Error occured while playing media. ");
    };

    render() {
        return (
            <ReactPlayer
                url={this.state.mediaUrl}
                className="react-player fixed-bottom"
                controls
                playing={true}
                playbackRate={1}
                onPlay={this.onPlay}
                onEnded={this.onEnd}
                onError={this.onError}
                onStart={this.onStart}
            />
        );
    }
} //PlayerWrapper..
