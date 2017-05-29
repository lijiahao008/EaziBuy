import * as APIUtil from '../util/item_api_util'

export const RECEIVE_EBAY_ITEMS = "RECEIVE_EBAY_ITEMS";
export const RECEIVE_IMAGE_LABELS = "RECEIVE_IMAGE_LABELS";
export const RECEIVE_IMAGE_ERROR = "RECEIVE_IMAGE_ERROR";
export const START_LOADING_EBAY = "START_LOADING_EBAY";
export const START_LOADING_IMAGE = "START_LOADING_IMAGE";


export const receiveEbayItems = items => ({
  type: RECEIVE_EBAY_ITEMS,
  items
});

export const receiveImageLabels = labels => ({
  type: RECEIVE_IMAGE_LABELS,
  labels
});


export const receiveImageError = error => ({
  type: RECEIVE_IMAGE_ERROR,
  error
});

export const startLoadingEbay = () => ({
  type: START_LOADING_EBAY
});

export const startLoadingImage = () => ({
  type: START_LOADING_IMAGE
});


export const getLabels = (picture_url) => dispatch => {
  dispatch(startLoadingImage());
  return APIUtil.fetchLabel(picture_url).then((res) =>
    { if (res.responses[0].labelAnnotations) {
        return dispatch(receiveImageLabels(res.responses[0].labelAnnotations))
      }
      else {
        let error = res.responses[0].error.message;
        return dispatch(receiveImageError(error))
      }
      })
}

export const getEbayItems = (keywords) => dispatch => {
  dispatch(startLoadingEbay());
  return APIUtil.fetchEbayItems(keywords).then((items) => {
    return dispatch(receiveEbayItems(items))
  })
}
