import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookmarkService from "../services/BookmarkService";
import PodcastIcon from "../assests/podcast-icon2.jpg";
import Episode from "./Episode";

export default class Bookmarks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookmarks: null,
            isLoggedOut: false
        };
    }

    componentDidMount() {
        BookmarkService.getAllUserBookmarks().then(res => {
            console.log(res);
            if (res === 401) {
                this.setState({
                    isLoggedOut: true
                });
            } else {
                this.setState({
                    bookmarks: res
                });
            }
        });
    }

    getEpisodeAudio = audioURL => {
        if (
            audioURL.length === 0 ||
            typeof audioURL === "undefined" ||
            audioURL === null
        ) {
            alert("No MP3 link for this episode");
        } else {
            this.setState({ episodeURL: audioURL });
        }
    };

    render() {
        const subCount = {
            marginBottom: "15px",
            color: "#7f858f",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "20px"
        };
        return (
            <div>
                <h3 className="mt-3">Bookmarks</h3>
                {this.state.isLoggedOut === true ? (
                    <p className="help-text text-white mt-3">
                        Please <Link to="/login">Log In</Link> to see your
                        bookmarks
                    </p>
                ) : (
                    <div className="podcast-list">
                        {this.state.bookmarks === null ? (
                            <p>
                                <i>Loading...</i>
                            </p>
                        ) : (
                            <div>
                                <p style={subCount}>
                                    Total Bookmarked Episodes :{" "}
                                    {this.state.bookmarks.length}
                                </p>
                                <ul>
                                    {this.state.bookmarks.map(episode => (
                                        <Episode
                                            id={episode.id}
                                            title={episode.title}
                                            description={episode.description}
                                            thumbnail={episode.thumbnail}
                                            pubDate={episode.pubDate}
                                            PodcastImg={PodcastIcon}
                                            getEpisodeAudio={() =>
                                                this.getEpisodeAudio(
                                                    episode.enclosureLink
                                                )
                                            }
                                            audioLength={episode.audio_length}
                                        />
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    }
}
