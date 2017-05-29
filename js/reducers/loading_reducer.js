import { RECEIVE_EBAY_ITEMS, START_LOADING_EBAY, START_LOADING_IMAGE, RECEIVE_IMAGE_LABELS } from '../actions/item_actions';
import merge from 'lodash/merge';

const LoadingReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case START_LOADING_IMAGE:
      return Object.assign({}, {loadingImage: true});
    case START_LOADING_EBAY:
      return Object.assign({}, {loadingEbay: true});
    case RECEIVE_EBAY_ITEMS:
      return Object.assign({}, {loadingEbay: false});
    case RECEIVE_IMAGE_LABELS:
      return Object.assign({}, {loadingImage: false});
    default:
      return oldState;
  }
};

export default LoadingReducer;
