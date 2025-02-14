import {
  SET_HAS_ACCEPTED_COOKIE_NOTICE,
  SET_PAGE_INDEX,
} from './actionTypes';

export const setPageIndex = (index) => ({
  type: SET_PAGE_INDEX,
  payload: index,
});

export const setHasAcceptedCookieNotice = (hasAccepted) => ({
  type: SET_HAS_ACCEPTED_COOKIE_NOTICE,
  payload: hasAccepted,
});
