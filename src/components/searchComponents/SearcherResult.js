import React, { Component } from "react";
import SearchItem from "./SearchItem";

export default class SearcherResult extends Component {
  render() {
    return (
      <div className="result-area">
        {Object.entries(this.props.results).length === 0 &&
        this.props.results.constructor === Object
          ? "Лист картинок пуст :("
          : this.props.results.hits.map(item => <SearchItem info={item}/>)}
      </div>
    );
  }
}
