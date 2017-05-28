import * as APIUtil from '../util/item_api_util'

export const RECEIVE_EBAY_ITEMS = "RECEIVE_EBAY_ITEMS";
export const START_LOADING_EBAY = "START_LOADING_EBAY";


export const receiveEbayItems = items => ({
  type: RECEIVE_EBAY_ITEMS,
  items
});

export const startLoadingEbay = () => ({
  type: START_LOADING_EBAY
});


export const searchEbayByUrl = (picture_url) => dispatch => {
  dispatch(startLoadingEbay());
  return APIUtil.fetchLabel(picture_url).then((res) =>
    { return APIUtil.fetchEbayItems(res.responses[0].labelAnnotations[0].description).then((items) =>
      { return dispatch(receiveEbayItems(items))})})
}
