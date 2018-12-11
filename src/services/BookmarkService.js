export default class BookmarkService {
    static getAllUserBookmarks = () => {
        return fetch("http://localhost:8080/api/bookmarks", {
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

    static createUserBookmark = episode_id => {
        return fetch(
            "http://localhost:8080/api/bookmarks/episode/" + episode_id,
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

    static deleteUserBookmark = bookmark_id => {
        return fetch(
            "http://localhost:8080/api/bookmarks/episode/" + bookmark_id,
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
