import React from "react";
import {Link} from "react-router-dom";
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
    <tr>
        <td>{id}</td>
        <td>
            <Link to={`/admin/podcasts/${id}/episodes`}>
                {/*<img src={logo === "null" ? PodcastIcon2 : logo} className="podcast-thumbnail"/>*/}
                {title}
            </Link>
        </td>


        <td>{url}</td>
        <td><a href={mygpo_link} target="_blank"> GPODDER LINK</a></td>
        <td>{new Date(lastSyncedOn).toLocaleString()}</td>
        <td>{new Date(createdOn).toLocaleString()}</td>
        <td>{new Date(modifiedOn).toLocaleString()}</td>
    </tr>
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
