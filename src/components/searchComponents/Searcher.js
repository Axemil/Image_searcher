import React, { Component } from "react";
import SearcherBar from "./SearcherBar";
import SearcherResult from "./SearcherResult";

export default class Searcher extends Component {
  render() {
    return (
      <div className="searcher">
        <SearcherBar/>
        <SearcherResult/>
      </div>
    );
  }
}
