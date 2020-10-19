import React from "react";
// import VideoPlayer from "./VideoPlayer";

class RecommendationCard extends React.Component {
  onClickHandler = () => {
    this.props.onClick(this.props.id);
  };

  render() {
    return (
      <div
        style={{ display: "flex", marginBottom: "10px", height: "90px" }}
        onClick={this.onClickHandler}
      >
        <img
          style={{ height: "90px", width: "120px", marginRight: "8px" }}
          src={this.props.cardContent.thumbnails.default.url}
          alt="2020-10-16T11:15:03Z"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <h4 style={{ marginTop: "0px" }}>{this.props.cardContent.title}</h4>
          <p>Spider Cars</p>
        </div>
      </div>
    );
  }
}

export default RecommendationCard;
