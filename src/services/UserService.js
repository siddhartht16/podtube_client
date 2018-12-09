export default class UserService {
    static registerUser = (usercredentials) => {
        return fetch('http://localhost:8080/api/register', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usercredentials)
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

    static loginUser = (usercredentials) => {
        return fetch('http://localhost:8080/api/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usercredentials)
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

    static fetchProfileForUser = () => {
        return fetch('http://localhost:8080/api/profile', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
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

    static logoutUser = () => {
        return fetch('http://localhost:8080/api/logout', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        })
    };
}
