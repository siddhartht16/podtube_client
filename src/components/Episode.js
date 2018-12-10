import React, {Component} from 'react';
import "./EpisodeList.style.css";

export default class Episode extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isBookmarked: false,
        }
    }

    formatEpisodeDate = (date) => {
        var newDate = (new Date(date));
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        let formatedDate = newDate.getDate() + ' ' + monthNames[(newDate.getMonth())] + ' ' + newDate.getFullYear();
        return formatedDate;
    };

    bookmarkEpisode = () => {
        this.setState({
            isBookmarked: true,
        })
    };

    unMarkEpisode = () => {
        this.setState({
            isBookmarked: false,
        })
    };

    componentDidMount() {
        this.formatEpisodeDate();
    }


    render() {
        return (
            <div className="episode-wrapper mb-2">
                <div className="row">
                    <div className="col-md-2">
                        {
                            this.props.thumbnail !== "" ?
                                <img src={this.props.thumbnail} className="episode-thumbnail"/> :
                                <img src={this.props.PodcastImg} className="episode-thumbnail"/>
                        }
                        <p className="episode-pub-date">{this.formatEpisodeDate(this.props.pubDate)}</p>
                    </div>
                    <div className="col-md-10">
                        <h5>{this.props.title}</h5>
                        <div className="row mt-3">
                            <div className="col-md-1">
                                <a className="fa fa-play-circle episode-play"
                                   target="_blank"
                                   onClick={this.props.getEpisodeAudio}
                                   title="Play Episode"
                                />
                            </div>
                            <div className="col-md-1">
                                {
                                    this.state.isBookmarked === false ?
                                        <span className="fa fa-star episode-bookmark"
                                              onClick={this.bookmarkEpisode}
                                              title="Bookmark Episode"/> :
                                        <span className="fa fa-star episode-bookmark yellow"
                                              onClick={this.unMarkEpisode}
                                              title="Unmark Episode"/>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

