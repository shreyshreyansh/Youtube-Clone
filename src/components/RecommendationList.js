import React from "react";
import RecommendationCard from "./RecommendationCard";

class RecommendationList extends React.Component {
  onClickSubmit = (videoId) => {
    this.props.onClick(videoId);
  };
  render() {
    if (this.props.videos.length !== 0) {
      return this.props.videos.map((video) => {
        return (
          <div>
            <RecommendationCard
              key={video.id.videoId}
              id={video.id.videoId}
              cardContent={video.snippet}
              onClick={this.onClickSubmit}
            />
          </div>
        );
      });
    } else {
      return null;
    }
  }
}

export default RecommendationList;
