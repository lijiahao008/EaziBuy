import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { searchEbayByUrl } from '../actions/item_actions';


class SearchByUrl extends React.Component {
  constructor(props){
    super(props)
    this.state={
      picture_url: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({[field]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchEbayByUrl(this.state.picture_url);
  }

  render () {

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <input type="text" onChange={this.update('picture_url')} />
            <a onClick={this.handleSubmit}>Submit</a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 text-center">
            <img src={this.state.picture_url} width="400" />
          </div>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  searchEbayByUrl: (picture_url) => dispatch(searchEbayByUrl(picture_url))
});

export default connect(
  null,
  mapDispatchToProps
)(SearchByUrl);
