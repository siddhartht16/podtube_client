import React, {Component} from 'react'
import AdminService from '../../services/AdminService';
import AdminPodcast from "./AdminPodcast";

export default class AdminPodcastList extends Component {
    constructor(props) {
        super(props);
        const categoryId = this.props.match ? this.props.match.params.id : null;

        this.state = {
            categoryId: categoryId,
            allPodcasts: null,
            podcasts: null
        }
    }

    componentDidMount() {
        if (this.state.categoryId !== null) {
            AdminService.getPodcastForCategory(this.state.categoryId).then(
                podcasts => {
                    console.log(podcasts);
                    this.setState({podcasts: podcasts})
                }
            )
        }
        else {
            AdminService.getAllPodcasts()
                .then(allPodcasts => {
                    this.setState({
                        allPodcasts: allPodcasts
                    })
                })
        }
    }

    syncPodcasts = () => {
        AdminService.syncPodcastForCategory(this.state.categoryId).then(
            podcasts => this.setState({podcasts: podcasts})
        )
    };

    render() {
        return (
            <div>
                <div className="sync-btn-wrapper pt-2 pb-2">
                    {
                        this.state.categoryId !== null ?
                            <button className="btn btn-primary" onClick={this.syncPodcasts}>Sync Podcast</button> : null
                    }
                </div>
                <div className="podcast-list">
                    {this.state.categoryId !== null && this.state.podcasts === null ?
                        <p className="mt-5">Loading...</p> :
                        <div>
                            <ul>
                                {this.state.categoryId !== null && this.state.podcasts.map((podcast) =>
                                    <AdminPodcast id={podcast.id} title={podcast.title}/>)
                                }
                            </ul>
                        </div>
                    }
                    {this.state.categoryId === null && this.state.allPodcasts === null ?
                        <p className="mt-5">Loading...</p> :
                        <div>
                            <ul>
                                {this.state.categoryId === null && this.state.allPodcasts.map((podcast) =>
                                    <AdminPodcast id={podcast.id} title={podcast.title}/>)
                                }
                            </ul>
                        </div>
                    }
                </div>
            </div>
        )
    }
}
