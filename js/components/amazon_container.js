import React from 'react';
import { connect } from 'react-redux';
import AmazonItems from './amazon_items';
import {getAmazonItems} from '../actions/item_actions';


const mapDispatchToProps = dispatch => ({
  getAmazonItems: (keywords) => dispatch(getAmazonItems(keywords))
});

export default connect(
  null,
  mapDispatchToProps
)(AmazonItems);
