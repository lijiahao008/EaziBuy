import React from 'react';
import LabelsContainer from './labels_container';
import EbayItemsContainer from './ebay_items_container';

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

export default Results;