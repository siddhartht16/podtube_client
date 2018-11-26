import React, {Component} from 'react';
import GenreList from "./components/GenreList";
import PodcastList from "./components/PodcastList";
import './App.css';
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom'
import EpisodeList from "./components/EpisodeList";
import PodcastSearchList from "./components/PodcastSearchList";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <header className="App-header text-center"><h1>PodTube</h1></header>
                        <Route exact
                               path="/"
                               render={() => <GenreList/>}
                        />
                        <Route path="/genre/:id/"
                               render={(props) => <PodcastList {...props}/>}/>

                        <Route path="/podcast/:podcastId"
                               render={(props) => <EpisodeList {...props}/>}/>

                        <Route path="/search/:searchTerm"
                               render={(props) => <PodcastSearchList {...props}/>}/>
                    </div>
                    <footer className="footer">
                        <div className="container">
                            <div className="row text-center">
                                <p className="mb-0">
                                    <b>Disclaimer</b>:
                                    This website is purely for educational purposes, no commercial use intended.
                                </p>
                            </div>
                        </div>
                    </footer>
                </div>
            </Router>
        );
    }
}

export default App;
