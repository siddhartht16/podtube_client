import React, {Component} from 'react';
import "./EpisodeList.style.css";

export default class Episode extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="episode-wrapper mb-3">
                <div className="row">
                    <div className="col-md-3">
                        {
                            this.props.thumbnail !== "" ?
                                <img src={this.props.thumbnail} className="episode-thumbnail"/> :
                                <img src={this.props.PodcastImg} className="episode-thumbnail"/>
                        }
                    </div>
                    <div className="col-md-9">
                        <h2>{this.props.title}</h2>
                        <div dangerouslySetInnerHTML={{__html: this.props.description}}
                             className="episode-description"/>
                        <div className="row mt-3">
                            <div className="col-md-1">
                                <a className="fa fa-play-circle episode-play"
                                   target="_blank"
                                   onClick={this.props.getEpisodeAudio}
                                   title="Play Episode"
                                />
                            </div>
                            <div className="col-md-1">
                                <span className="fa fa-bookmark episode-bookmark" title="Bookmark Episode"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

