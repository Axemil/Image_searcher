import React, { Component } from "react";
import { connect } from "react-redux";
import { getImage } from "../actions/imgAction";

class SearcherBar extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }
  getInfo = event => this.setState({ value: event.target.value });
  sendInfo = event => {
    event.preventDefault();
    this.props.getImage(this.state.value);
    this.setState({value: ''})
  };

  render() {
    return (
      <div onSubmit={this.sendInfo} className="searcher-bar">
        <form>
          <input
            onChange={this.getInfo}
            className="inputText"
            value={this.state.value}
            type="text"
          />
          <input className="inputSubmit" type="submit" />
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { getImage }
)(SearcherBar);