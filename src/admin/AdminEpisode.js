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
    <div className={"row"}>
        <div className={"col"}>{id}</div>
        <div className={"col"}>{title}</div>
        <div className={"col"}>{new Date(lastSyncedOn).toLocaleString()}</div>
        <div className={"col"}>{mediaType}</div>
        <div className={"col"}>{new Date(pubDate).toLocaleString()}</div>
        <div className={"col"}>{author}</div>
        {/*<div className={"col"}>{link}</div>*/}
        <div className={"col"}>{enclosureLink}</div>
        <div className={"col"}>{enclosureType}</div>
        <div className={"col"}>{enclosureLength}</div>
        <div className={"col"}>{enclosureDuration}</div>
        {/*<div className={"col"}>{description}</div>*/}
        <div className={"col"}>{createdBy}</div>
        <div className={"col"}>{modifiedBy}</div>
        <div className={"col"}>{new Date(createdOn).toLocaleString()}</div>
        <div className={"col"}>{new Date(modifiedOn).toLocaleString()}</div>
        {/*<div className={"col"}>{guid}</div>*/}
        {/*<div className={"col"}>{thumbnail}</div>*/}
    </div>
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
