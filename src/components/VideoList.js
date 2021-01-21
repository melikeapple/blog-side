import React from "react";
import { Link } from "react-router-dom";

const VideoList = ({ videos }) => (
  <>
    {videos.map((video, index) => (
      <Link key={index} to={`/video/${video.name}`}>
        <h2>{video.title}</h2>
        <p>{video.content[0].substring(0, 150)}...</p>
      </Link>
    ))}
  </>
);
export default VideoList;
