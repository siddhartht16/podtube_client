import { BASE_URL } from "../common/constants";

export default class SubscriptionService {
    static subscribeUser = podcast_id => {
        return fetch(`${BASE_URL}api/subscription/podcast/${podcast_id}`, {
            method: "POST",
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

    static unSubscribeUser = podcast_id => {
        return fetch(`${BASE_URL}api/subscription/podcast/${podcast_id}`, {
            method: "DELETE",
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

    static subscribeUserByUrl = podcast_url => {
        return fetch(`${BASE_URL}api/subscription/podcast?url=${podcast_url}`, {
            method: "POST",
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

    static getAllUserSubscription = () => {
        return fetch(`${BASE_URL}api/subscription`, {
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
