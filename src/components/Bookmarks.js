import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom'
import SubscriptionService from "../services/SubscriptionService";
import BookmarkService from "../services/BookmarkService";
import Podcast from "./Podcast";

export default class Bookmarks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bookmarks: null,
            isLoggedOut: false
        }
    }

    componentDidMount() {
        BookmarkService.getAllUserBookmarks()
            .then(res => {
                console.log(res);
                if (res === 401) {
                    this.setState({
                        isLoggedOut: true
                    })
                }
                else {
                    this.setState({
                        bookmarks: res
                    })
                }

            })
    }


    render() {
        const subCount = {
            marginBottom: '15px',
            color: '#7f858f',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '20px'
        };
        return (
            <div>
                <h3 className="mt-3">Bookmarks</h3>
                {
                    this.state.isLoggedOut === true ?
                        <p className="help-text mt-3">Please <Link to="/login">Log In</Link> to see your bookmarks
                        </p> :
                        <div>
                            Bookmarks go here
                        </div>

                }
            </div>
        )
    }

}