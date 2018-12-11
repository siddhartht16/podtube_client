export default class RecentlyPlayedService {
    static getHistoryForUser = () => {
        return fetch("http://localhost:8080/api/history", {
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

    static createUserHistoryItem = episode_id => {
        return fetch(
            "http://localhost:8080/api/history/episode/" + episode_id,
            {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        ).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return response.status;
            }
        });
    };

    static deleteHistoryItem = bookmark_id => {
        return fetch(
            "http://localhost:8080/api/history/episode/" + bookmark_id,
            {
                method: "DELETE",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        ).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return response.status;
            }
        });
    };
}
