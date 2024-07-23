import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Video from "../../components/Video/Video";
import Details from "../../components/Details/Details";
import Comments from "../../components/Comments/Comments";
import SideBar from "../../components/SideBar/SideBar";


function VideoDetailsPage({ videos, defaultVideoId }) {
  const [videoDetails, setVideoDetails] = useState(null);
  const baseURL = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
  const apiKey = "6da2c0f1-f01d-4f32-a166-2fd67adb1ef1";

  let { id } = useParams();

  if (!id) {
    id = defaultVideoId;
  }

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await axios.get(
          baseURL + "videos/" + id + "?api_key=" + apiKey
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
