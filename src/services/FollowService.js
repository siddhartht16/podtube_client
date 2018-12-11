export default class FollowService {
    static followUser = user_id => {
        return fetch("http://localhost:8080/api/follow/" + user_id, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            return response.json();
        });
    };

    static unFollowUser = user_id => {
        return fetch("http://localhost:8080/api/unfollow/" + user_id, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            return response.json();
        });
    };
}
