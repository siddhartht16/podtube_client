import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AdminCategory = ({
    id,
    title,
    tag,
    createdBy,
    modifiedBy,
    createdOn,
    modifiedOn,
    lastSyncedOn
}) => (
    <div className={"row"}>
        {/*<li key={id}>*/}
        <div className={"col"}>{id}</div>
        <Link className={"col"} to={`/admin/categories/${id}/podcasts`}>
            {title}{" "}
        </Link>
        <div className={"col"}>{tag}</div>
        <div className={"col"}>{new Date(lastSyncedOn).toLocaleString()}</div>
        <div className={"col"}>{createdBy}</div>
        <div className={"col"}>{modifiedBy}</div>
        <div className={"col"}>{new Date(createdOn).toLocaleString()}</div>
        <div className={"col"}>{new Date(modifiedOn).toLocaleString()}</div>
        {/*</li>*/}
    </div>
);

AdminCategory.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    tag: PropTypes.string,
    createdBy: PropTypes.string,
    modifiedBy: PropTypes.string,
    createdOn: PropTypes.string,
    modifiedOn: PropTypes.string,
    lastSyncedOn: PropTypes.string
};

export default AdminCategory;
