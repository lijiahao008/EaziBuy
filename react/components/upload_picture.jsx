import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import { uploadPicture } from '../actions/item_actions';


class UploadPicture extends React.Component {
  constructor(props){
    super(props)
    this.state={
      picture_url: "",
      picture: null,
      submitting: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.renderSubmitButton = this.renderSubmitButton.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({[field]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({submitting: true});
  }

  onDrop(acceptedFiles, rejectedFiles){
    this.setState({picture: acceptedFiles[0],
    picture_url: acceptedFiles[0].preview})
  }

  renderSubmitButton(){
    if (!this.state.submitting) {
      return  <h4 className="panel-title">
                <i className="fa fa-check" aria-hidden="true"></i> Finish
              </h4>;
    }
    else {
      return  <h4 className="panel-title">
                <div className="cssload-container">
                  <div className="loading6"></div>
                </div>
              </h4>;
    }
  }


  render () {

    return (

      <div className="row">
        <div className="form-group">
          <Dropzone
            onDrop={this.onDrop}
            className="menu-dropzone">
            <p>Drop some files here, or click to select files to upload.</p>
          </Dropzone>
        </div>

        <div className="panel panel-default">
          <a onClick={this.handleSubmit}>
            <div className="panel-heading">
                {this.renderSubmitButton()}
            </div>
          </a>
        </div>
        <div className="col-md-6 text-center">
          <a><img src={this.state.picture_url} width="400" /></a>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  uploadPicture: (picture) => dispatch(uploadPicture(picture))
});

export default connect(
  null,
  mapDispatchToProps
)(UploadPicture);
