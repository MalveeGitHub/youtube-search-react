import React, { Component } from "react";

class singleVideo extends Component {
  render() {
    return (
      <div>
        <iframe
          width="95%"
          height="450px"
          src={`https://www.youtube.com/embed/${this.props.videoId}`}
        />
        <h4 className="lead text-left">{this.props.title}</h4>
        <h3 className="lead text-left text-primary">
          {" "}
          <span className="text-info">Channel Name: </span>{" "}
          <a
            target="_blank"
            href={`https://www.youtube.com/channel/${this.props.chanelId}`}
          >
            {this.props.chName}
          </a>
        </h3>
        <h6 className="h6 lead text-left text-danger">
          <span className="text-info">Created At:</span>{" "}
          {this.props.publishedAt}
        </h6>
      </div>
    );
  }
}

export default singleVideo;
