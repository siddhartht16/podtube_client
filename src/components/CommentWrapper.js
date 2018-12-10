import React, {Component} from 'react';
import "./Comment.style.css";
import CommentService from "../services/CommentService";
import Comment from "./Comment";

export default class CommentWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            commentBody: '',
            comments: null
        }
    }

    onChangeComment = (e) => {
        this.setState({
            commentBody: e.target.value,
            error: false
        });
    };

    onCreateComment = () => {
        let comment = {'comment': this.state.commentBody};
        CommentService.createCommentForPodcast(this.props.podcastId, comment)
            .then(data => {
                if (data === 401) {
                    this.setState({
                        error: true
                    })
                }
            });
    };

    formatCommentDate = (date) => {
        var newDate = (new Date(date));
        let formatedDate = (newDate.getMonth() + 1) + '/' + newDate.getDate() + '/' + newDate.getFullYear();
        return formatedDate;
    };

    componentDidMount = () => {
        CommentService.findCommentsForPodcast(this.props.podcastId)
            .then(data => {
                this.setState({
                    comments: data
                })
            })
    };


    render() {
        return (
            <div className="comment-wrapper mt-3">
                <div className="card">
                    <div className="card-header">
                        {this.props.title}
                    </div>
                    <div className="card-body">
                        {
                            this.props.isCommentForm === false ?
                                <div>
                                    <div>
                                        {this.state.comments === null ? <p><i>Loading...</i></p> :
                                            <ul>{this.state.comments.length === 0 ?
                                                <span className="help-text">No comments for this podcast</span> : null}
                                                {
                                                    this.state.comments.map((comment) =>
                                                        <Comment comment={comment}
                                                                 proComp={false}
                                                                 date={this.formatCommentDate(comment.createdOn)}/>)
                                                }
                                            </ul>
                                        }
                                    </div>
                                </div> :
                                <div>
                                    {
                                        this.state.error === true ?
                                            <div className="alert alert-danger" role="alert">
                                                Please log in before commenting
                                            </div> : null
                                    }
                                    <form className="form">
                                        <div className="form-group">
                                            <p>Write Comment</p>
                                            <textarea id="comment-text"
                                                      onChange={this.onChangeComment}
                                                      value={this.state.commentBody}
                                                      className="form-control"/>
                                            <button type="button"
                                                    onClick={this.onCreateComment}
                                                    className="mt-2 podcast-comments-btn btn__alt">Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

