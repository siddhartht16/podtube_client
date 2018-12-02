import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom'
export default class Logout extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                Logout Component
            </div>
        )
    }
}
