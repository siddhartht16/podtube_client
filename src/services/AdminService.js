import { BASE_URL } from "../common/constants";

export default class AdminService {
    static syncAllCategories = () => {
        return fetch(`${BASE_URL}admin/sync/categories`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            return response.json();
        });
    };

    static getAllCategories = () => {
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

    static getPodcastForCategory = categoryId => {
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

    static syncPodcastForCategory = categoryId => {
        return fetch(
            `${BASE_URL}admin/sync/categories/${categoryId}/podcasts`,
            {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        ).then(response => {
            return response.json();
        });
    };

    static getEpisodesForPodcast = podcastId => {
        return fetch(`${BASE_URL}api/podcasts/${podcastId}/episodes`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            return response.json();
        });
    };

    static syncEpisodesForPodcast = podcastId => {
        return fetch(`${BASE_URL}admin/sync/podcasts/${podcastId}/episodes`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            return response.json();
        });
    };

    static getAllPodcasts = () => {
        return fetch(`${BASE_URL}api/podcasts`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            return response.json();
        });
    };

    static loginAdmin = admincredentials => {
        return fetch(`${BASE_URL}admin/login`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(admincredentials)
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return response.status;
            }
        });
    };

    static getApplicationStats = () => {
        return fetch(`${BASE_URL}admin/stats`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
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
