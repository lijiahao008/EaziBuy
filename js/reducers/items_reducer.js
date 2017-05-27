import { RECEIVE_ITEMS } from '../actions/item_actions';
import merge from 'lodash/merge';

const SearchReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ITEMS:
      debugger
      return merge({}, action.results);
    default:
      return oldState;
  }
};

export default SearchReducer;
