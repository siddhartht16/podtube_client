import React, {Component} from 'react';
import GenreList from "./components/GenreList";
import PodcastList from "./components/PodcastList";
import './App.css';
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom'
import EpisodeList from "./components/EpisodeList";
import PodcastSearchList from "./components/PodcastSearchList";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-2 sidebar">
                                <Sidebar/>
                            </div>
                            <main className="col-md-9 ml-sm-auto col-lg-10 px-4">
                                <Header text="Header"/>
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
