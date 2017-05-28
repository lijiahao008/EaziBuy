import React from 'react';
import { connect } from 'react-redux';
import EbayItems from './ebay_items'

const mapStateToProps = state => {
  let ebayUrl;
  let totalResults;
  let items;
  if (state.items.ebayItems === undefined) {
    ebayUrl = "";
    totalResults = 0;
    items = [];
  }
  else {
    ebayUrl = state.items.ebayItems.itemSearchURL[0];
    totalResults =  state.items.ebayItems.paginationOutput[0].totalEntries[0];
    items = state.items.ebayItems.searchResult[0].item;
  }
  debugger
    return {
      ebayUrl,
      totalResults,
      items
    }
};

export default connect(
  mapStateToProps,
  null
)(EbayItems);
