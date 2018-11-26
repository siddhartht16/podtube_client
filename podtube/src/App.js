import React, {Component} from 'react';
import PodcastList from "./components/PodcastList";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <header className="App-header text-center"><h1>PodTube</h1></header>
                    <PodcastList/>
                </div>
            </div>
        );
    }
}

export default App;
