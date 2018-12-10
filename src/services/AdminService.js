export default class AdminService {

    static syncAllCategories = () => {
        return fetch('http://localhost:8080/api/sync/categories', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                return response.json()
            });
    };

    static getAllCategories = () => {
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

    static getPodcastForCategory = (categoryId) => {
        return fetch('http://localhost:8080/api/categories/'+categoryId+'/podcasts', {
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

    static syncPodcastForCategory = (categoryId) => {
        return fetch('http://localhost:8080/api/sync/categories/'+categoryId+'/podcasts', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                return response.json()
            });
    };

    static getEpisodesForPodcast = (podcastId) => {
        return fetch('http://localhost:8080/api/podcasts/'+podcastId+'/episodes', {
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

    static syncEpisodesForPodcast = (podcastId) => {
        return fetch('http://localhost:8080/api/sync/podcasts/'+podcastId+'/episodes', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                return response.json()
            });
    };


    static getAllPodcasts = () => {
        return fetch('http://localhost:8080/api/podcasts', {
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

    static loginAdmin = (admincredentials) => {
        return fetch('http://localhost:8080/admin/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(admincredentials)
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                else{
                    return response.status;
                }
            });
    };



}