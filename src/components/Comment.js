import React from 'react'
import {Link} from "react-router-dom";

const Comment = ({comment, date}) =>
    <div className="comment-body">
        <li key={comment.id}>
            <p>{comment.comment}
                <span className="comment-username">
                    <Link to={`/profile/${comment.user.id}`}>- {comment.user.username}</Link>
                </span>
            </p>
            <span className="comment-date">{date}</span>
        </li>
    </div>;


export default Comment
