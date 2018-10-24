import React, { Component } from "react";
import YT from "youtube-api-search";
import Video from "./Video";
import SingleVideo from "./singleVideo";
const API_KEY = "AIzaSyBMP9Raxx3tu2t1rgREmGz_pB36uKCIQlQ";

class Youtube extends Component {
  state = {
    term: "",
    data: "",
    selectedVideo: 0
  };
  handelSubmit = e => {
    e.preventDefault();
    if (this.state.term !== "") {
      const { term } = this.state;
      YT({ key: API_KEY, term: term }, data => {
        this.setState({ data });
      });
    }
  };
  changeVideo(id) {
    this.setState({ selectedVideo: id });
  }
  render() {
    return (
      <div className="container-fluid my-4">
        <form onSubmit={this.handelSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Search YouTube"
            onChange={e => {
              this.setState({
                term: e.target.value
              });
            }}
          />
        </form>
        <div className="row mt-3">
          <div className="col-md-8">
            {this.state.data !== "" ? (
              <SingleVideo
                title={this.state.data[this.state.selectedVideo].snippet.title}
                videoId={this.state.data[this.state.selectedVideo].id.videoId}
                changeVideo={this.changeVideo}
                chName={
                  this.state.data[this.state.selectedVideo].snippet.channelTitle
                }
                chanelId={
                  this.state.data[this.state.selectedVideo].snippet.channelId
                }
                publishedAt={
                  this.state.data[this.state.selectedVideo].snippet.publishedAt
                }
              />
            ) : null}
          </div>
          <div className="col-md-4">
            {this.state.data !== ""
              ? this.state.data.map((video, index) => (
                  <div onClick={this.changeVideo.bind(this, index)}>
                    <Video
                      data={video}
                      title={video.snippet.title}
                      thumbnail={video.snippet.thumbnails.medium.url}
                      videoId={video.id.videoId}
                    />
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Youtube;
