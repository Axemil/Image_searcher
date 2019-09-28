import React, { Component } from "react";
import SearcherBar from "./SearcherBar";
import SearcherResult from "./SearcherResult";

export default class Searcher extends Component {
  constructor(){
    super();
    this.state = {
      text: {}
    }
  }
  setInfo = message => {
    this.setState({text: message})
  }

  render() {
    return (
      <div className="searcher">
        <SearcherBar setInfo={this.setInfo}/>
        <SearcherResult results={this.state.text}/>
      </div>
    );
  }
}
