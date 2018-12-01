import React, {Component} from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        return (
            <header className="App-header">
                <div className="row">
                    <div className="col-md-10">
                        <h2>{this.props.text}</h2>
                    </div>
                    <div className="col-md-2">
                        <h6 className="logout">Logout</h6>
                    </div>
                </div>
            </header>
        )
    }
}
