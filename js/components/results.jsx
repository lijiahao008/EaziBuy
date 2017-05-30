import React from 'react';
import LabelsContainer from './labels_container';
import EbayItemsContainer from './ebay_items_container';
import { connect } from 'react-redux';

class Results extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      labels: true,
      ebay: false
    }
    this.openTab = this.openTab.bind(this);
  }

  openTab(field){
    this.setState({labels: false, ebay: false});
    this.setState({[field]: true});
  }

  render () {
    if (this.props.initialPage && !this.props.error) {
      return <div>Select an image to show results.</div>;
    }
    if (this.props.error) {
      return <div className="label-error">{this.props.error}</div>
    }
    return (
      <div>
        <div className="tabs">
          <div className="tab-items"  onClick={()=>this.openTab("labels")}>labels</div>
          <div className="tab-items"  onClick={()=>this.openTab("ebay")}>ebay</div>
        </div>
        {this.state.labels ? <LabelsContainer /> : ""}
        {this.state.ebay ? <EbayItemsContainer /> : ""}
    </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialPage: jQuery.isEmptyObject(state.items.labels),
  error: state.items.error ? state.items.error : false
});

export default connect(
  mapStateToProps,
  null
)(Results);
