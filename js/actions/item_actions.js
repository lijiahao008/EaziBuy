import * as APIUtil from '../util/item_api_util'

export const RECEIVE_ITEMS = "RECEIVE_ITEMS";


export const receiveItems = items => ({
  type: RECEIVE_ITEMS,
  items
});


export const uploadPicture = (picture_url) => dispatch => (
  APIUtil.fetchItems(picture_url).then(items => dispatch(receiveItems(items)))
);
