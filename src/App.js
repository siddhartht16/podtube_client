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
import Profile from "./components/Profile";
import ReactPlayer from 'react-player'
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

class App extends Component {
    render() {
        const pb100 = {
            paddingBottom: '100px'
        };
        return (
            <Router>
                <div className="App">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-2 sidebar">
                                <Sidebar/>
                            </div>
                            <main className="col-md-9 ml-sm-auto col-lg-10 px-4" style={pb100}>
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
                                <Route path="/profile"
                                       render={() => <Profile/>}/>
                                <Route path="/login"
                                       render={() => <Login/>}/>
                                <Route path="/register"
                                       render={() => <Register/>}/>
                            </main>
                            {/*<ReactPlayer url="https://bit.ly/2Q4Ej4K"*/}
                                         {/*className="react-player fixed-bottom"*/}
                                         {/*controls*/}
                                         {/*playbackRate={1}/>*/}
                            <Footer/>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
