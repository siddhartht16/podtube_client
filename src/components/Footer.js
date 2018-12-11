import React, { Component } from "react";

export default class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {}

    render() {
        return (
            <footer className="footer fixed-bottom">
                <div className="row">
                    <div className="col-md-3">
                        <ul className="footer-list">
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">References</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-9">
                        <p className="disclaimer-text">
                            This website is purely for educational purposes, no
                            commercial use intended
                        </p>
                    </div>
                </div>
            </footer>
        );
    }
}
