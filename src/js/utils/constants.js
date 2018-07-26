'use strict';

const Constants = function () {
    const GOOGLE_API_URL    = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyD0AyBlQjEdLHFLHRisGjSAxVTK-N4Mpdc&cx=013618200282448016581:rb4rsmv0c0i';
    const QUERY_TYPE_IMG    = 'IMAGE_QUERY';
    const QUERY_TYPE_WEB    = 'WEB_QUERY';

    const PAGINATION_DIV_ID = 'Pagination';
    const SEARCH_INPUT_ID   = 'SearchInput';
    const WEB_RESULT_DIV_ID = 'WebSearch';
    const IMG_RESULT_DIV_ID = 'ImageSearch';

    const IMG_PER_PAGE      = 9;
    const WEB_PER_PAGE      = 4;

    return {
        GOOGLE_API_URL    : GOOGLE_API_URL,
        QUERY_TYPE_IMG    : QUERY_TYPE_IMG,
        QUERY_TYPE_WEB    : QUERY_TYPE_WEB,
        PAGINATION_DIV_ID : PAGINATION_DIV_ID,
        SEARCH_INPUT_ID   : SEARCH_INPUT_ID,
        WEB_RESULT_DIV_ID : WEB_RESULT_DIV_ID,
        IMG_RESULT_DIV_ID : IMG_RESULT_DIV_ID,
        IMG_PER_PAGE      : IMG_PER_PAGE,
        WEB_PER_PAGE      : WEB_PER_PAGE
    }
}();
