export default class PodcastService {

    static findAllPodcasts = (module, callback) => {
        const PODCAST_URL = '';
        fetch(PODCAST_URL, {
            method: 'GET',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
        })
            .then(res => res.json())
            .then(function (data) {
                callback(data);
            })
    };

}