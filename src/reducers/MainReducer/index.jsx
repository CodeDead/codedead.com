import {
  SET_PAGE_INDEX,
  SET_THEME_COLOR_INDEX,
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
    case SET_THEME_COLOR_INDEX:
      localStorage.themeColorIndex = action.payload;
      return {
        ...state,
        themeColorIndex: action.payload,
      };
    default:
      return state;
  }
};

export default MainReducer;
