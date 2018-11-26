import * as urls from "../common/urls";

export default class PodcastService {

    static findAllGenre = () => {
        return fetch(urls.get_genre_url(), {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'X-Mashape-Key': 'KIGieSKrRimshAGZ3rLFadB6Vu99p1xwkuijsnN5epxiNhLSez'
            },
        })
            .then(response => {
                return response.json()
            });
    };

    static findPodcastForGenre = (genre_id) => {
        return fetch(urls.get_genre_best_podcasts_url(genre_id), {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'X-Mashape-Key': 'KIGieSKrRimshAGZ3rLFadB6Vu99p1xwkuijsnN5epxiNhLSez'
            },
        })
            .then(response => {
                return response.json()
            });
    };

    static findEpisodesForPodcast = (podcast_id) => {
        return fetch(urls.get_podcast_episodes_url(podcast_id), {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'X-Mashape-Key': 'KIGieSKrRimshAGZ3rLFadB6Vu99p1xwkuijsnN5epxiNhLSez'
            },
        })
            .then(response => {
                return response.json()
            });
    };

    static searchPodcastList = (podcast_name) => {
        return fetch(urls.get_search_by_title_url(podcast_name), {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'X-Mashape-Key': 'KIGieSKrRimshAGZ3rLFadB6Vu99p1xwkuijsnN5epxiNhLSez'
            },
        })
            .then(response => {
                return response.json()
            });
    }



}