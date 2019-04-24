import React from "react";

export default class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      seachInComplatedTasks: false,
      searchKey: "",
      error: ""
    };
  }

  handleChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      error: ""
    }, () => {
      const {searchKey, seachInComplatedTasks} = this.state;
      if(seachInComplatedTasks && !searchKey) {
        this.setState({ error:"enter task name to search" });
      } 
      if (searchKey) {
        this.props.enableSearchMode();
        this.props.searchTaskRequest(searchKey, seachInComplatedTasks);
      } else {
        this.props.disableSearchMode();
      }
    });
    
  };

  render() {
    const error = this.state.error;
    return (
      <div className="row justify-content-md-center">
        <div className="card bg-light col-md-9 mb-3">
          <div className="card-header">Search</div>
          <form role="form">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="searchKey"
                value={this.state.searchKey}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-check has-error">
              <input
                className="form-check-input"
                type="checkbox"
                name="seachInComplatedTasks"
                checked={this.state.seachInComplatedTasks}
                onChange={this.handleChange}
              />
              <label className="form-check-label">
              Search in Complated Tasks only
              </label>
              <span className="ml-3 help-block">
                {error}
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
