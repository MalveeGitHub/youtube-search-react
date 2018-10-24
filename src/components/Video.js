import React, { Component } from "react";
import "./style.css";

class Video extends Component {
  render() {
    return (
      <div
        className="container side-video m-1 bordered rounded border"
        style={{ cursor: "pointer" }}
      >
        <div className="mt-2">
          <img src={this.props.thumbnail} height="100" width="auto" alt="" />
          <p className="mt-2 lead vidoe-title">{this.props.title}</p>
          {console.log(this.props.data)}
        </div>
      </div>
    );
  }
}

export default Video;
