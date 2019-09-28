import React, { Component } from "react";

export default class SearcherResult extends Component {
  render() {
    let arrayImages = [];
    if (this.props.results.totalHits && this.props.results.totalHits > 0) {
      arrayImages = this.props.results.hits.map(item => item.webformatURL);
      console.log(arrayImages);
    }
    return (
      <div className="result-area">
        {arrayImages.map(url => (
          <img src={url} />
        ))}
      </div>
    );
  }
}
