
export default class UserService {
    static registerUser = (usercredentials) =>{
        return fetch('http://localhost:8080/api/register', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usercredentials)
        })
            .then(response => {
                return response.json()
            });
    }
}
