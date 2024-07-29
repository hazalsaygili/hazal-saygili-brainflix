import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Video from "../../components/Video/Video";
import Details from "../../components/Details/Details";
import Comments from "../../components/Comments/Comments";
import SideBar from "../../components/SideBar/SideBar";


function VideoDetailsPage({ videos, defaultVideoId }) {
  const [videoDetails, setVideoDetails] = useState(null);
  const baseURL = "http://localhost:8080/";

  let { id } = useParams();

  if (!id) {
    id = defaultVideoId;
  }

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await axios.get(
          baseURL + "videos/" + id
        );
        setVideoDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideoDetails();
  }, [id]);

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
          videos={videos.filter((video) => video.id != defaultVideoId)}
        />
      </section>
    </>
  );
}

export default VideoDetailsPage;
