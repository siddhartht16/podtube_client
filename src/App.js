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
import Profile from "./components/Auth/Profile";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Dashboard from "./components/Admin/Dashboard";
import CategoryList from "./components/Admin/CategoryList";
import AdminPodcastList from "./components/Admin/AdminPodcastList";
import AdminPodcast from "./components/Admin/AdminPodcast";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminPodcastDetail from "./components/Admin/AdminPodcastDetail";
import Subscription from "./components/Subscription";
import Logout from "./components/Auth/Logout";
import Bookmarks from "./components/Bookmarks";
import EditProfile from "./components/Auth/EditProfile";

class App extends Component {

    render() {
        const pb80 = {
            paddingBottom: '80px'
        };
        return (
            <Router>
                <div className="App">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-2 sidebar">
                                <Sidebar/>
                            </div>
                            <main className="col-md-9 ml-sm-auto col-lg-10 px-4" style={pb80}>
                                <Header/>
                                <Route exact
                                       path="/"
                                       render={(props) => <GenreList {...props}/>}/>

                                <Route exact
                                       path="/categories"
                                       render={() => <GenreList/>}/>

                                <Route
                                       path="/admin/dashboard"
                                       render={() => <Dashboard/>}/>

                                <Route
                                    exact
                                    path="/admin"
                                    render={() => <AdminLogin/>}/>

                                <Route
                                    path="/admin/category-list"
                                    render={() => <CategoryList/>}/>

                                <Route
                                    path="/admin/podcast-list"
                                    render={() => <AdminPodcastList/>}/>

                                <Route
                                    path="/admin/categories/:id/podcasts"
                                    render={(props) => <AdminPodcastList {...props}/>}/>

                                <Route
                                    path="/admin/podcasts/:id/episodes"
                                    render={(props) => <AdminPodcastDetail  {...props}/>}/>

                                <Route path="/category/:id/podcasts"
                                       render={(props) => <PodcastList {...props}/>}/>

                                <Route path="/podcast/:podcastId/episodes"
                                       render={(props) => <EpisodeList {...props}/>}/>

                                <Route path="/search/:searchTerm"
                                       render={(props) => <PodcastSearchList {...props}/>}/>

                                <Route path="/subscriptions"
                                       exact
                                       render={() => <Subscription/>}/>

                                <Route path="/bookmarks"
                                       exact
                                       render={() => <Bookmarks/>}/>

                                <Route path="/profile"
                                       exact
                                       render={() => <Profile/>}/>

                                <Route path="/profile/:id"
                                       render={(props) => <Profile {...props}/>}/>

                                <Route path="/update/profile"
                                       render={() => <EditProfile/>}/>


                                <Route path="/login"
                                       exact
                                       render={() => <Login/>}/>

                                <Route path="/logout"
                                       exact
                                       render={() => <Logout/>}/>

                                <Route path="/register"
                                       exact
                                       render={() => <Register/>}/>

                            </main>
                            {/*<Footer/>*/}
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
