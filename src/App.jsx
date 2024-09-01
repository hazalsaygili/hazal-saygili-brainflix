import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import "./styles/main.scss";
import NavBar from "./components/NavBar/NavBar";
import VideoDetailsPage from "./pages/VideoDetailsPage/VideoDetailsPage";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<VideoDetailsPage />} />
        <Route path="/videos/:id" element={<VideoDetailsPage />} />
        <Route path="/upload-video" element={<VideoUploadPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
