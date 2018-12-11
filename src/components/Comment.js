import React from "react";
import { Link } from "react-router-dom";

const Comment = ({ comment, date, proComp }) => (
    <div className="comment-body">
        <li key={comment.id}>
            <p className="border-0 p-0">
                {comment.comment}
                {proComp === false ? (
                    <span className="comment-username">
                        <Link to={`/profile/${comment.user.id}`}>
                            - {comment.user.username}
                        </Link>
                    </span>
                ) : null}
            </p>
            <span className="comment-date"> - {date}</span>
        </li>
    </div>
);

export default Comment;
