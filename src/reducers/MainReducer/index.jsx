import {
  SET_BLOG_LIMIT,
  SET_HAS_ACCEPTED_COOKIE_NOTICE,
  SET_PAGE_INDEX,
  SET_THEME_INDEX,
} from './Actions/actionTypes';

const MainReducer = (state, action) => {
  switch (action.type) {
    case SET_PAGE_INDEX:
      return {
        ...state,
        pageIndex: action.payload,
      };
    case SET_THEME_INDEX:
      localStorage.themeIndex = action.payload;
      return {
        ...state,
        themeIndex: action.payload,
      };
    case SET_BLOG_LIMIT:
      return {
        ...state,
        blogLimit: action.payload,
      };
    case SET_HAS_ACCEPTED_COOKIE_NOTICE:
      localStorage.hasAcceptedCookieNotice = action.payload;
      return {
        ...state,
        hasAcceptedCookieNotice: action.payload,
      };
    default:
      return state;
  }
};

export default MainReducer;
