import React, { Component } from "react";
import PodcastService from "../services/PodcastService";
import "./CategoryList.style.css";
import Category from "./Category";

export default class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: null
        };
    }

    componentDidMount() {
        PodcastService.findAllCategories().then(categories => {
            this.setState({ categories: categories });
        });
    }

    shortenTitle = title => {
        let short = title.replace(/(.{10})..+/, "$1...");
        return short;
    };

    render() {
        return (
            <div>
                {this.state.categories === null ? (
                    <p className="mt-5">Loading...</p>
                ) : (
                    <div className="genre-list">
                        <ul>
                            {this.state.categories.map((genre, index) => (
                                <Category
                                    key={index}
                                    id={genre.id}
                                    fullTitle={genre.title}
                                    title={this.shortenTitle(genre.title)}
                                />
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}
