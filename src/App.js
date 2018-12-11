import React, { Component } from "react";
import MainView from "./containers/MainView";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import AdminDashboard from "./admin/AdminDashboard";
import AdminCategoryList from "./admin/AdminCategoryList";
import AdminPodcastList from "./admin/AdminPodcastList";
import AdminLogin from "./admin/AdminLogin";
import AdminPodcastDetail from "./admin/AdminPodcastDetail";
import Logout from "./auth/Logout";
import * as contexts from "./common/contexts";

class App extends Component {
    render() {
        const pb80 = {
            paddingBottom: "80px"
        };
        return (
            <Router>
                <div className="App">
                    <Route exact path="/admin" render={() => <AdminLogin />} />

                    <Route
                        path="/admin/dashboard"
                        render={() => <AdminDashboard />}
                    />

                    <Route
                        path="/admin/category-list"
                        render={() => <AdminCategoryList />}
                    />

                    <Route
                        path="/admin/podcast-list"
                        render={() => <AdminPodcastList />}
                    />

                    <Route
                        path="/admin/categories/:id/podcasts"
                        render={props => <AdminPodcastList {...props} />}
                    />

                    <Route
                        path="/admin/podcasts/:id/episodes"
                        render={props => <AdminPodcastDetail {...props} />}
                    />

                    <Route path="/login" exact render={() => <Login />} />

                    <Route path="/logout" exact render={() => <Logout />} />

                    <Route path="/register" exact render={() => <Register />} />

                    <Route
                        exact
                        path="/"
                        render={() => (
                            <MainView context={contexts.HOME_CONTEXT_CONST} />
                        )}
                    />

                    <Route
                        exact
                        path="/categories"
                        render={props => (
                            <MainView
                                {...props}
                                context={contexts.CATEGORIES_CONTEXT_CONST}
                            />
                        )}
                    />

                    <Route
                        path="/category/:id/podcasts"
                        render={props => (
                            <MainView
                                {...props}
                                context={contexts.CATEGORY_CONTEXT_CONST}
                                subContext={contexts.PODCASTS_CONTEXT_CONST}
                            />
                        )}
                    />

                    <Route
                        path="/podcast/:podcastId/episodes"
                        render={props => (
                            <MainView
                                {...props}
                                context={contexts.PODCAST_CONTEXT_CONST}
                                subContext={contexts.EPISODES_CONTEXT_CONST}
                            />
                        )}
                    />

                    <Route
                        path="/search/:searchTerm"
                        render={props => (
                            <MainView
                                {...props}
                                context={contexts.SEARCH_CONTEXT_CONST}
                            />
                        )}
                    />

                    <Route
                        path="/subscriptions"
                        exact
                        render={props => (
                            <MainView
                                {...props}
                                context={contexts.SUBSCRIPTIONS_CONTEXT_CONST}
                            />
                        )}
                    />

                    <Route
                        path="/bookmarks"
                        exact
                        render={props => (
                            <MainView
                                {...props}
                                context={contexts.BOOKMARKS_CONTEXT_CONST}
                            />
                        )}
                    />

                    <Route
                        path="/history"
                        exact
                        render={props => (
                            <MainView
                                {...props}
                                context={contexts.HISTORY_CONTEXT_CONST}
                            />
                        )}
                    />

                    <Route
                        path="/profile"
                        exact
                        render={props => (
                            <MainView
                                {...props}
                                context={contexts.PROFILE_CONTEXT_CONST}
                            />
                        )}
                    />

                    <Route
                        path="/profile/:id"
                        render={props => (
                            <MainView
                                {...props}
                                context={contexts.PROFILE_CONTEXT_CONST}
                            />
                        )}
                    />

                    <Route
                        path="/editProfile"
                        render={props => (
                            <MainView
                                {...props}
                                context={contexts.EDIT_PROFILE_CONTEXT_CONST}
                            />
                        )}
                    />
                </div>
            </Router>
        );
    }
}

export default App;
