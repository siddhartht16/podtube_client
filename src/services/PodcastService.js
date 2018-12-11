import { BASE_URL, GPODDER_SEARCH_URL } from "../common/constants";

export default class PodcastService {
    static findAllCategories = () => {
        return fetch(`${BASE_URL}api/categories`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            return response.json();
        });
    };

    static findPodcastForCategory = categoryId => {
        return fetch(`${BASE_URL}api/categories/${categoryId}/podcasts`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            return response.json();
        });
    };

    static findEpisodesForPodcast = podcast_id => {
        return fetch(`${BASE_URL}api/podcasts/${podcast_id}/episodes`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            return response.json();
        });
    };

    static searchPodcastList = search_term => {
        return fetch(`${GPODDER_SEARCH_URL}${search_term}`, {
            method: "GET",
            headers: {
                "Content-Type": "text/plain"
            }
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return response.status;
            }
        });
    };
}
