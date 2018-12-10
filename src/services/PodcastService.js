import * as urls from "../common/urls";

export default class PodcastService {

    static findAllCategories = () => {
        return fetch('http://localhost:8080/api/categories', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                return response.json()
            });
    };

    static findPodcastForCategory = (categoryId) => {
        return fetch('http://localhost:8080/api/categories/' + categoryId + '/podcasts', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                return response.json()
            });
    };

    static findEpisodesForPodcast = (podcast_id) => {
        return fetch('http://localhost:8080/api/podcasts/' + podcast_id + '/episodes', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                return response.json()
            });
    };

    static searchPodcastList = (search_term) => {
        return fetch('http://localhost:8080/api/search/' + search_term, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                return response.json()
            });
    }


}