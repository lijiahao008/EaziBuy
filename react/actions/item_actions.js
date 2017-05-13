import * as APIUtil from '../util/item_api_util'

export const RECEIVE_ITEMS = "RECEIVE_ITEMS";


export const receiveItems = items => ({
  type: RECEIVE_ITEMS,
  items
});


export const uploadPicture = (picture) => dispatch => (
  APIUtil.fetchItems(picture).then(items => dispatch(receiveItems(items)))
);
