import React, {Component} from 'react'
import AdminService from '../../services/AdminService';
import AdminPodcast from "./AdminPodcast";

export default class AdminPodcastList extends Component {
    constructor(props) {
        super(props);

        const categoryId = this.props.match.params.id ? this.props.match.params.id : null;

        this.state = {
            categoryId: categoryId,
            podcasts: null
        }
    }

    componentDidMount() {
        AdminService.getPodcastForCategory(this.state.categoryId).then(
            podcasts => {
                console.log(podcasts);
                this.setState({podcasts: podcasts})
            }
        )
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
                    <button className="btn btn-primary" onClick={this.syncPodcasts}>Sync Podcast</button>
                </div>
                <div className="podcast-list">
                    {this.state.podcasts === null ? <p className="mt-5">Loading...</p> :
                        <div>
                            <ul>
                                {this.state.podcasts.map((podcast) =>
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
