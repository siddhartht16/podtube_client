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
                    <div className="container-fluid">
                        <div className="row">
                            <nav className="col-md-2 sidebar"></nav>
                            <main className="col-md-9 ml-sm-auto col-lg-10 px-4">
                                <header className="App-header">
                                    <h2>PodTube</h2>
                                </header>
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
                            </main>
                        </div>
                    </div>
                    {/*<footer className="footer">*/}
                    {/*<div className="container">*/}
                    {/*<div className="row text-center">*/}
                    {/*<p className="mb-0">*/}
                    {/*<b>Disclaimer</b>:*/}
                    {/*This website is purely for educational purposes, no commercial use intended.*/}
                    {/*</p>*/}
                    {/*</div>*/}
                    {/*</div>*/}
                    {/*</footer>*/}
                </div>
            </Router>
        );
    }
}

export default App;
