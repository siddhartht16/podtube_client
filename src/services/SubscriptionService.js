export default class SubscriptionService {
    static subscribeUser = podcast_id => {
        return fetch(
            "http://localhost:8080/api/subscription/podcast/" + podcast_id,
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

    static unSubscribeUser = podcast_id => {
        return fetch(
            "http://localhost:8080/api/subscription/podcast/" + podcast_id,
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

    static getAllUserSubscription = () => {
        return fetch("http://localhost:8080/api/subscription", {
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
