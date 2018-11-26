import * as constants from 'constants';

export function get_genre_url() {
    return `${constants.LISTEN_NOTES_BASE_URL}${constants.PODCAST_GENRES}`;
}

export function get_genre_best_podcasts_url(p_genre_id, p_page_number){

    return `${constants.LISTEN_NOTES_BASE_URL}${constants.BEST_PODCASTS}?
    ${constants.GENRE_ID}=${p_genre_id}&${constants.PAGE}=${p_page_number}`;
}
