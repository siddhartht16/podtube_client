import React from "react";
import PropTypes from "prop-types";

const AdminEpisode = ({
    id,
    title,
    mediaType,
    pubDate,
    link,
    guid,
    author,
    thumbnail,
    description,
    enclosureLink,
    enclosureType,
    enclosureLength,
    enclosureDuration,
    enclosureThumbnail,
    createdOn,
    modifiedOn,
    createdBy,
    modifiedBy,
    lastSyncedOn
}) => (
    <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{mediaType}</td>
        <td><a href={enclosureLink} target="_blank">Media Link</a></td>
        <td>{new Date(pubDate).toLocaleString()}</td>
        <td>{new Date(lastSyncedOn).toLocaleString()}</td>
        <td>{new Date(createdOn).toLocaleString()}</td>
        <td>{new Date(modifiedOn).toLocaleString()}</td>
    </tr>
);

AdminEpisode.propTypes = {
    id: PropTypes.number,
    mediaType: PropTypes.string,
    title: PropTypes.string,
    pubDate: PropTypes.string,
    link: PropTypes.string,
    guid: PropTypes.string,
    author: PropTypes.string,
    thumbnail: PropTypes.string,
    description: PropTypes.string,
    enclosureLink: PropTypes.string,
    enclosureType: PropTypes.string,
    enclosureLength: PropTypes.number,
    enclosureDuration: PropTypes.number,
    enclosureThumbnail: PropTypes.string,
    createdOn: PropTypes.string,
    modifiedOn: PropTypes.string,
    createdBy: PropTypes.string,
    modifiedBy: PropTypes.string,
    lastSyncedOn: PropTypes.string
};

export default AdminEpisode;
