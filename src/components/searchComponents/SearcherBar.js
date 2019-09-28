import React, { Component } from "react";
import axios from "axios";

export default class SearcherBar extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }

  getInfo = event => this.setState({ value: event.target.value });
  sendInfo = event => {
    event.preventDefault();

    const API_KEY = '13776155-c9c35bb00b5318825d10e2b82';
    axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${this.state.value}&image_type=photo`)
      .then(res => {
        this.props.setInfo(res.data);
      })
    

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
