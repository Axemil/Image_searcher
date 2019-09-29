import React, { Component } from "react";
import SearchItem from "./SearchItem";
import { connect } from "react-redux";
import { getImage } from "../actions/imgAction";

class SearcherResult extends Component {

  render() {
    return (
      <>
        <div className="result-area">
          {this.props.images.hits
            ? this.props.images.hits.map(item => <SearchItem info={item} />)
            : "Введите что нибудь."}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  images: state.images.items
});

export default connect(
  mapStateToProps,
  { getImage }
)(SearcherResult);
