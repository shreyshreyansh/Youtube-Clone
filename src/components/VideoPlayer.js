import React from "react";
import ReactPlayer from "react-player";

class VideoPlayer extends React.Component {
  render() {
    console.log(this.props.videoId);
    const url = "https://www.youtube.com/watch?v=" + this.props.videoId;
    return <ReactPlayer url={url} />;
  }
}

export default VideoPlayer;
