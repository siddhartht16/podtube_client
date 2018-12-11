import { BASE_URL } from "../common/constants";

export default class CommentService {
    static findCommentsForPodcast = podcast_id => {
        return fetch(`${BASE_URL}api/podcast/${podcast_id}/comment`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            return response.json();
        });
    };

    static createCommentForPodcast = (podcast_id, commentObj) => {
        return fetch(`${BASE_URL}api/podcast/${podcast_id}/comment`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(commentObj)
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return response.status;
            }
        });
    };
}
