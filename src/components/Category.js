import React from "react";
import PodcastIcon from "../assests/podcast-icon.png";
import { Link } from "react-router-dom";

const Category = ({ id, title, fullTitle }) => (
    <div>
        <Link to={`/category/${id}/podcasts`}>
            <li key={id} title={fullTitle}>
                <img src={PodcastIcon} className="genre-img" />
                <span className="genre-text">{title}</span>
            </li>
        </Link>
    </div>
);

export default Category;
