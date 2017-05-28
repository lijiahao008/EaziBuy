import * as APIUtil from '../util/item_api_util'

export const RECEIVE_EBAY_ITEMS = "RECEIVE_EBAY_ITEMS";
export const RECEIVE_EBAY_ITEMS_ERRORS = "RECEIVE_EBAY_ITEMS_ERRORS";
export const START_LOADING_EBAY = "START_LOADING_EBAY";


export const receiveEbayItems = items => ({
  type: RECEIVE_EBAY_ITEMS,
  items
});

export const receiveEbayItemsError = errors => ({
  type: RECEIVE_EBAY_ITEMS_ERRORS,
  errors
});

export const startLoadingEbay = () => ({
  type: START_LOADING_EBAY
});


export const searchEbayByUrl = (picture_url) => dispatch => {
  dispatch(startLoadingEbay());
  return APIUtil.fetchLabel(picture_url).then((res) =>
    { const keywords = res.responses[0].labelAnnotations.map((label)=>(label.description)).join("%20");
      return APIUtil.fetchEbayItems(keywords).then((items) =>
      { return dispatch(receiveEbayItems(items))})})
}
