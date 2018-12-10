export default class BookmarkService {

    static getAllUserBookmarks = () => {
        return fetch('http://localhost:8080/api/bookmarks', {
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
                else {
                    return response.status;
                }
            });
    };

    static createUserBookmark = (bookmarkObj) => {
        return fetch('http://localhost:8080/api/bookmarks', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookmarkObj)
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                else {
                    return response.status;
                }
            });
    };

}