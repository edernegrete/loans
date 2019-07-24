import { fromJS } from 'immutable';
import {
  GET_LOANS,
  SET_LOANS,
  SET_LOAN_DETAIL,
} from '../actions/loans';

const initialState = fromJS({
  data: [],
  detail: {}
});
const movies = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOANS:
      return state.get('data');
    case SET_LOANS:
      return state.set('data', fromJS(action.payload));
    case SET_LOAN_DETAIL:
      return state.set('detail', fromJS(action.payload));
    default: return state;
  }
};

export default movies;
