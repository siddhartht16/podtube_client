import React from "react";
import { Link } from "react-router-dom";
import PodcastIcon2 from "../assests/podcast-icon.png";
import PropTypes from "prop-types";

const AdminPodcast = ({
    id,
    logo,
    title,
    url,
    website,
    mygpo_link,
    author,
    createdBy,
    modifiedBy,
    createdOn,
    modifiedOn,
    lastSyncedOn,
    description
}) => (
    <div className={"row"}>
        <div className={"col"}>{id}</div>
        <Link to={`/admin/podcasts/${id}/episodes`}>
            <img
                src={logo === "null" ? PodcastIcon2 : logo}
                className="podcast-thumbnail"
            />
            {title}
        </Link>
        <div className={"col"}>{description}</div>
        <div className={"col"}>{new Date(lastSyncedOn).toLocaleString()}</div>
        <div className={"col"}>{url}</div>
        <div className={"col"}>{website}</div>
        <div className={"col"}>{mygpo_link}</div>
        <div className={"col"}>{author}</div>
        <div className={"col"}>{createdBy}</div>
        <div className={"col"}>{modifiedBy}</div>
        <div className={"col"}>{new Date(createdOn).toLocaleString()}</div>
        <div className={"col"}>{new Date(modifiedOn).toLocaleString()}</div>
    </div>
);

AdminPodcast.propTypes = {
    id: PropTypes.number,
    logo: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
    website: PropTypes.string,
    mygpo_link: PropTypes.string,
    author: PropTypes.string,
    createdBy: PropTypes.string,
    modifiedBy: PropTypes.string,
    createdOn: PropTypes.string,
    modifiedOn: PropTypes.string,
    lastSyncedOn: PropTypes.string,
    description: PropTypes.string
};

export default AdminPodcast;
