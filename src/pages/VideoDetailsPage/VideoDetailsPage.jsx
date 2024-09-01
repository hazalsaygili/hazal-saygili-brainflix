import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Video from "../../components/Video/Video";
import Details from "../../components/Details/Details";
import Comments from "../../components/Comments/Comments";
import SideBar from "../../components/SideBar/SideBar";

function VideoDetailsPage() {
  let { id } = useParams();
  const [videos, setVideos] = useState([]);
  const [videoDetails, setVideoDetails] = useState(null);
  const baseURL = "http://localhost:8080/";

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(baseURL + "videos");
        setVideos(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchVideos();
  }, []);

  const pageVideoId = id || videos[0]?.id;

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await axios.get(baseURL + "videos/" + pageVideoId);
        setVideoDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    pageVideoId && fetchVideoDetails();
  }, [pageVideoId]);

  if (!videoDetails) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <Video activeVideo={videoDetails} />
      <section className="app__container">
        <div className="app__videoDetails">
          <Details activeVideo={videoDetails} />
          <Comments activeVideo={videoDetails} />
        </div>
        <SideBar
          videos={videos.filter((video) => video.id != pageVideoId)}
        />
      </section>
    </>
  );
}

export default VideoDetailsPage;
