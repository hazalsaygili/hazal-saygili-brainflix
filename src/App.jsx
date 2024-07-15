import { useState } from "react";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Video from "./components/Video/Video";
import Details from "./components/Details/Details";
import Comments from "./components/Comments/Comments";
import SideBar from "./components/SideBar/SideBar";
import videoDetailsJson from "./data/video-details.json";

function App() {
  const [videos, setVideos] = useState(videoDetailsJson.slice(1));
  const [activeVideo, setActiveVideo] = useState(videoDetailsJson[0]);

  const handleVideoClick = (clickedId) => {
    const newActiveVideo = videos.find((video) => video.id === clickedId);

    const newVideosList = videoDetailsJson.filter(
      (video) => video.id != clickedId
    );
    setActiveVideo(newActiveVideo);
    setVideos(newVideosList);
  };

  return (
    <>
      <NavBar />
      <Video activeVideo={activeVideo} />
      <section className="app__container">
        <div className="app__videoDetails">
          <Details activeVideo={activeVideo} />
          <Comments comments={activeVideo.comments} />
        </div>
        <SideBar videos={videos} handleVideoClick={handleVideoClick} />
      </section>
    </>
  );
}

export default App;
