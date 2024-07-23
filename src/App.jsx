import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.scss";
import "./styles/main.scss";
import NavBar from "./components/NavBar/NavBar";
import VideoDetailsPage from "./pages/VideoDetailsPage/VideoDetailsPage";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";

function App() {
  const [videos, setVideos] = useState([]);
  const baseURL = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
  const apiKey = "6da2c0f1-f01d-4f32-a166-2fd67adb1ef1";

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(baseURL + "videos?api_key=" + apiKey);
        setVideos(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideos();
  }, []);

  if (videos.length === 0) {
    return <span>Loading...</span>;
  }

  const defaultVideoId = videos[0].id;

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <VideoDetailsPage
              defaultVideoId={defaultVideoId}
              videos={videos.filter((video) => video.id != defaultVideoId)}
            />
          }
        />
        <Route
          path="/videos/:id"
          element={
            <VideoDetailsPage
              videos={videos.filter((video) => video.id != defaultVideoId)}
            />
          }
        />
        <Route path="/upload-video" element={<VideoUploadPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
