import React from "react";
import { Link } from "react-router-dom";

const Following = ({ user }) => (
    <li>
        <p>
            <Link to={`/profile/${user.id}`} className="text-dark">
                {user.firstname}&nbsp;{user.lastname}
            </Link>
        </p>
    </li>
);

export default Following;
