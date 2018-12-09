import React, {Component} from 'react';
import "./EpisodeList.style.css";

export default class CommentWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


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
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in
                                        to additional content.</p>
                                    <p className="card-text">With supporting text below as a natural lead-in
                                        to additional content.</p>
                                    <p className="card-text">With supporting text below as a natural lead-in
                                        to additional content.</p>
                                    <p className="card-text">With supporting text below as a natural lead-in
                                        to additional content.</p>

                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div> :
                                <div>
                                    <form className="form">
                                        <div className="form-group">
                                            <p>Write Comment</p>
                                            <textarea id="comment-text"
                                                      className="form-control"/>
                                            <button type="button"
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

