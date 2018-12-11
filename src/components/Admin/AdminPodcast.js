import React from "react";
import { Link } from "react-router-dom";
import PodcastIcon2 from "../../assests/podcast-icon.png";

const AdminPodcast = ({ id, logo, title }) => (
    <div>
        <li key={id}>
            <Link to={`/admin/podcasts/${id}/episodes`}>
                <img
                    src={logo === "null" ? PodcastIcon2 : logo}
                    className="podcast-thumbnail"
                />
                {title}
            </Link>
        </li>
    </div>
);

export default AdminPodcast;
