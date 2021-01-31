import {
  SET_BLOG_LIMIT,
  SET_PAGE_INDEX,
  SET_THEME_COLOR_INDEX,
  SET_THEME_INDEX,
} from './actionTypes';

export const setPageIndex = (index) => ({
  type: SET_PAGE_INDEX,
  payload: index,
});

export const setThemeIndex = (index) => ({
  type: SET_THEME_INDEX,
  payload: index,
});

export const setThemeColorIndex = (index) => ({
  type: SET_THEME_COLOR_INDEX,
  payload: index,
});

export const setBlogLimit = (limit) => ({
  type: SET_BLOG_LIMIT,
  payload: limit,
});
