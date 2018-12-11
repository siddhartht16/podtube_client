import { BASE_URL } from "../common/constants";

export default class UserService {
    static registerUser = usercredentials => {
        return fetch(`${BASE_URL}api/register`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usercredentials)
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return response.status;
            }
        });
    };

    static loginUser = usercredentials => {
        return fetch(`${BASE_URL}api/login`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usercredentials)
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return response.status;
            }
        });
    };

    static fetchProfileForUser = () => {
        return fetch(`${BASE_URL}api/profile`, {
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

    static logoutUser = () => {
        return fetch(`${BASE_URL}api/logout`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        });
    };

    static getCommentForUser = user_id => {
        return fetch(`${BASE_URL}api/user/${user_id}/comment`, {
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
