import * as constants from './constants';

export function get_genre_url() {
    return `${constants.LISTEN_NOTES_BASE_URL}${constants.PODCAST_GENRES}`;
}

export function get_genre_best_podcasts_url(p_genre_id, p_page_number) {

    return `${constants.LISTEN_NOTES_BASE_URL}${constants.BEST_PODCASTS}?${constants.QP_GENRE_ID}=${p_genre_id}&${constants.QP_PAGE}=${p_page_number}`;
}

export function get_search_by_title_url(p_search_term) {

    return `${constants.LISTEN_NOTES_BASE_URL}${constants.SEARCH}?${constants.QP_SEARCH_TERM}=${p_search_term}&${constants.QP_SEARCH_TYPE_PODCAST}&=${constants.QP_SEARCH_ONLY_IN_TITLE}`;
}

export function get_podcast_episodes_url(p_podcast_id, p_next_episode_pub_date, p_sort_order) {

    const next_episode_pub_date_query_param = p_next_episode_pub_date ?
        `${constants.QP_NEXT_EPISODE_PUB_DATE}=${p_next_episode_pub_date}` : "";

    const sort_query_param = p_sort_order ?
        `${constants.QP_SORT}=${p_sort_order}` :
        `${constants.QP_SORT}=${constants.QP_SORT_RECENT_VALUE}`;

    return `${constants.LISTEN_NOTES_BASE_URL}${constants.PODCASTS}/${p_podcast_id}?
    ${next_episode_pub_date_query_param}&${sort_query_param}`;
}