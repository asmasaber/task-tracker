import React from "react";

export default class Search extends React.Component {
  handleChange = (e) => {
    const searchKey = e.target.value;
    if(searchKey) {
      this.props.enableSearchMode();
      this.props.searchTaskRequest(searchKey, false);
    } else {
      this.props.disableSearchMode();
    }
  };

  render() {
    return (
      <div className="row justify-content-md-center">
        <div className="card bg-light col-md-9 mb-3">
          <div className="card-header">Search</div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="searchKey"
              onChange={e => this.handleChange(e)}
            />
          </div>
        </div>
      </div>
    );
  }
}
