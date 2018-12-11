import { BASE_URL } from "../common/constants";

export default class FollowService {
    static followUser = user_id => {
        return fetch(`${BASE_URL}api/follow/${user_id}`, {
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
        return fetch(`${BASE_URL}api/unfollow/${user_id}`, {
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
