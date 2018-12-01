import React, {Component} from 'react';
import PodcastService from "../services/PodcastService";
import "./GenreList.style.css";
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
            .then(data => {
                console.log(data);
                this.setState({genre: data})});
    }

    render() {
        return (
            <div>
                {this.state.genre === null ? <p className="mt-5">Loading...</p> :
                    <div className="genre-list">
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