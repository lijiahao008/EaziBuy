import { RECEIVE_EBAY_ITEMS } from '../actions/item_actions';
import merge from 'lodash/merge';

const SearchReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_EBAY_ITEMS:
      return merge({}, {ebayItems: action.items.findItemsByKeywordsResponse[0]});
    default:
      return oldState;
  }
};

export default SearchReducer;
