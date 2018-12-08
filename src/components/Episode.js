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
                        <img src={this.props.thumbnail} className="episode-thumbnail"/>
                    </div>
                    <div className="col-md-9">
                        <h2>{this.props.title}</h2>
                        <div dangerouslySetInnerHTML={{__html: this.props.description}} className="episode-description"/>
                        <div className="row mt-3">
                            <div className="col-md-2">
                                <span className="fa fa-play-circle episode-play" title="Play Episode"/>
                            </div>
                            <div className="col-md-2">
                                <span className="fa fa-bookmark episode-bookmark" title="Bookmark Episode"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

