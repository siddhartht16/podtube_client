import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import * as appContexts from "../common/contexts";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import PodcastList from "../components/PodcastList";
import EpisodeList from "../components/EpisodeList";
import PodcastSearchList from "../components/PodcastSearchList";
import Subscription from "../components/Subscription";
import Bookmarks from "../components/Bookmarks";
import Profile from "../auth/Profile";
import EditProfile from "../auth/EditProfile";
import CategoryList from "../components/CategoryList";

export default class MainView extends Component {
    constructor(props) {
        super(props);

        const path = props.match && props.match.path ? props.match.path : "";
        const params =
            props.match && props.match.params ? props.match.params : {};

        const context = props.context;
        const subContext = props.subContext;

        const stateParams = this.getStateParams(
            path,
            params,
            context,
            subContext
        );
        this.state = {
            context: context,
            subContext: subContext,
            contextParam: stateParams.contextParam,
            subContextParam: stateParams.subContextParam
        };
    }

    getStateParams(path, params, propContext, propSubContext) {
        let result = {
            contextParam: "",
            subContextParam: ""
        };

        //If slash return from here
        if (propContext === appContexts.HOME_CONTEXT_CONST) {
            return result;
        } //if..

        // "/category/:id/podcasts"
        // "/podcast/:podcastId/episodes"
        // "/search/:searchTerm"
        // "/profile/:id"
        switch (propContext) {
            case appContexts.CATEGORY_CONTEXT_CONST:
                if (!_.isEmpty(params)) {
                    result.contextParam = parseInt(params.id, 10);
                }
                break;
            case appContexts.PODCAST_CONTEXT_CONST:
                if (!_.isEmpty(params)) {
                    result.contextParam = parseInt(params.podcastId, 10);
                }
                break;
            case appContexts.SEARCH_CONTEXT_CONST:
                if (!_.isEmpty(params)) {
                    result.contextParam = params.searchTerm;
                }
                break;
            case appContexts.PROFILE_CONTEXT_CONST:
                if (!_.isEmpty(params)) {
                    result.contextParam = parseInt(params.id, 10);
                }
                break;
            default:
                break;
        }

        return result;
    }

    componentDidMount() {}

    getMainElement() {
        let result = null;

        switch (this.state.context) {
            // Root
            case appContexts.HOME_CONTEXT_CONST:
                result = <CategoryList />;
                break;

            // "/categories"
            case appContexts.CATEGORIES_CONTEXT_CONST:
                result = <CategoryList />;
                break;

            // "/category/:id/podcasts"
            case appContexts.CATEGORY_CONTEXT_CONST:
                result = <PodcastList categoryId={this.state.contextParam} />;
                break;

            // "/podcast/:podcastId/episodes"
            case appContexts.PODCAST_CONTEXT_CONST:
                result = <EpisodeList podcastId={this.state.contextParam} />;
                break;

            // "/search/:searchTerm"*/}
            case appContexts.SEARCH_CONTEXT_CONST:
                result = (
                    <PodcastSearchList searchTerm={this.state.contextParam} />
                );
                break;

            // "/subscriptions"
            case appContexts.SUBSCRIPTIONS_CONTEXT_CONST:
                result = <Subscription />;
                break;

            // "/bookmarks"*/}
            case appContexts.BOOKMARKS_CONTEXT_CONST:
                result = <Bookmarks />;
                break;

            // "/profile"
            case appContexts.PROFILE_CONTEXT_CONST:
                result = <Profile userId={this.state.contextParam} />;
                break;

            // "/editProfile"
            case appContexts.EDIT_PROFILE_CONTEXT_CONST:
                result = <EditProfile />;
                break;
            default:
                break;
        }
        return result;
    }

    render() {
        const pb80 = {
            paddingBottom: "80px"
        };

        const mainElement = this.getMainElement();

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 sidebar">
                        <Sidebar appContext={this.state.context} />
                    </div>
                    <main
                        className="col-md-9 ml-sm-auto col-lg-10 px-4"
                        style={pb80}
                    >
                        <Header />
                        {mainElement}
                        {/*<Footer/>*/}
                    </main>
                </div>
            </div>
        );
    }
}

MainView.propTypes = {
    context: PropTypes.string,
    subContext: PropTypes.string
};
