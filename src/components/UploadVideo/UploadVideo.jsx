import "./UploadVideo.scss";
import uploadVideoImg from "../../assets/images/Upload-video-preview.jpg";
import uploadVideoIcon from "../../assets/images/icons/publish.svg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function UploadVideo() {
  const navigate = useNavigate();
  const baseURL = "http://localhost:8080";

  const postVideo = async (newVideo) => {
    let fullUrl = baseURL + "/videos";

    try {
      const response = await axios.post(fullUrl, newVideo);
      window.alert("Your video is published!");
    } catch (error) {
      window.alert(error);
    }
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const newVideo = {title: event.target.videoTitle.value, description: event.target.videoDescription.value};
    await postVideo(newVideo);
    navigate("/");
  };

  return (
    <div className="uploadVideo__container">
      <h1>Upload Video</h1>
      <form className="uploadVideo__uploadForm" onSubmit={formSubmitHandler}>
        <div className="uploadVideo__wrapper">
          <div className="uploadVideo__ImgWrapper">
            <label htmlFor="uploadVideo__Img" className="uploadVideo__label">
              VIDEO THUMBNAIL{" "}
            </label>
            <img
              className="uploadVideo__Img"
              src={uploadVideoImg}
              alt="athlete's right hand and legs leaning to race ground ready to run"
            />
          </div>
          <div className="uploadVideo__inputWrapper">
            <label htmlFor="videoTitle" className="uploadVideo__label">
              TITLE YOUR VIDEO
            </label>
            <input
              type="text"
              name="videoTitle"
              id="videoTitle"
              className="uploadVideo__inputField"
              placeholder="Add a title to your video"
            />
            <label htmlFor="videoDescription" className="uploadVideo__label">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              type="text"
              name="videoDescription"
              id="videoDescription"
              className="uploadVideo__inputField"
              placeholder="Add a description to your video"
            />
          </div>
        </div>
        <div className="uploadVideo__buttonWrapper">
          <Link to="/" className="uploadVideo__cancelButton">
            CANCEL
          </Link>
          <button className="uploadVideo__publishButton">
            <img src={uploadVideoIcon} alt="upload video icon" /> PUBLISH{" "}
            <span></span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default UploadVideo;
