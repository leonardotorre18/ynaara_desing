import { combineReducers } from 'redux';
import { actionTypes } from './actions';

export default combineReducers({
  products: (state = [], action) => {
    switch (action.type) {
      case actionTypes.ADD_TO_CART:
        return state.some((e) => e.id === action.payload.id)

          ? state.map(e => e.id === action.payload.id 
            ? { ...e, count: e.count + action.payload.count }
            : e)
          : [
            ...state,
            action.payload,
          ];
      case actionTypes.RESET_CART:
        return [];

      default:
        return state;
    }
  },
});
