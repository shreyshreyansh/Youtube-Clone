import React from "react";
import VideoPlayer from "./VideoPlayer";
import SearchBar from "./SearchBar";
import RecommendationList from "./RecommendationList";
import Description from "./Description";
import axios from "axios";

class App extends React.Component {
  state = { videos: [], videoId: "ug50zmP9I7s", currentChannel: {} };

  onSearchSubmit = async (term) => {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          q: term,
          part: "snippet",
          maxResults: "20",
          type: "video",
          key: "AIzaSyAodnJp7x96SuagKU1Q073M42C7xNNn3RQ"
        }
      }
    );

    //console.log(response.data.items);

    this.setState({ videos: response.data.items });
  };

  onClickByRec = (videoId) => {
    //console.log(videoId);
    this.setState({ videoId: videoId });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div
          style={{
            marginTop: "100px",
            display: "flex",
            justifyContent: "space-evenly"
          }}
        >
          <div>
            <VideoPlayer videoId={this.state.videoId} />
            <Description />
          </div>
          <div
            style={{
              width: "500px"
            }}
          >
            <RecommendationList
              videos={this.state.videos}
              onClick={this.onClickByRec}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
