import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

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
    <tr>
        <td>{id}</td>
        <td>
            <Link to={`/admin/categories/${id}/podcasts`}>{title}</Link>
        </td>
        <td>{tag}</td>
        <td>{new Date(lastSyncedOn).toLocaleString()}</td>
        <td>{new Date(createdOn).toLocaleString()}</td>
        <td>{new Date(modifiedOn).toLocaleString()}</td>
    </tr>
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
