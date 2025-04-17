import { SET_PAGE_INDEX } from './Actions/actionTypes';

const MainReducer = (state, action) => {
  switch (action.type) {
    case SET_PAGE_INDEX:
      return {
        ...state,
        pageIndex: action.payload,
      };
    default:
      return state;
  }
};

export default MainReducer;
