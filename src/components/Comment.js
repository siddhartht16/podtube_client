import React from 'react'

const Comment = ({comment, date}) =>
    <div className="comment-body">
        <li key={comment.id}>
            <p>{comment.comment}
                <span className="comment-username">- {comment.user.username}</span>
            </p>
            <span className="comment-date">{date}</span>
        </li>
    </div>;


export default Comment
