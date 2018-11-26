import React, {Component} from 'react';
import PodcastService from "../services/PodcastService";
import Genre from "./Genre";


export default class GenreList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genre: null,
        }
    }

    componentDidMount() {
        PodcastService.findAllGenre()
            .then(data => this.setState({genre: data}));

    }

    render() {
        return (
            <div>
                {this.state.genre === null ? <h4 className="text-center mt-5"><i>Loading...</i></h4> :
                    <div>
                        <h2 className="mt-5">Select a category to view podcasts</h2>
                        <ul>
                            {this.state.genre['genres'].map((genre) =>
                                <Genre id={genre.id} name={genre.name}/>)
                            }
                        </ul>
                    </div>
                }
            </div>
        )
    }

}