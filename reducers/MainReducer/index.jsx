import {
  SET_HAS_ACCEPTED_COOKIE_NOTICE,
  SET_PAGE_INDEX,
} from './Actions/actionTypes';

const MainReducer = (state, action) => {
  switch (action.type) {
    case SET_PAGE_INDEX:
      return {
        ...state,
        pageIndex: action.payload,
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
