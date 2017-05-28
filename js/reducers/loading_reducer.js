import { RECEIVE_EBAY_ITEMS, START_LOADING_EBAY } from '../actions/item_actions';
import merge from 'lodash/merge';

const LoadingReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case START_LOADING_EBAY:
      return Object.assign({}, {loadingEbay: true});
    case RECEIVE_EBAY_ITEMS:
      return Object.assign({}, {loadingEbay: false});
    default:
      return oldState;
  }
};

export default LoadingReducer;
