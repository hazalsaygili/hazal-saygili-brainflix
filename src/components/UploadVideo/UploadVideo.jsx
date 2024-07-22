import "./UploadVideo.scss";
import uploadVideoImg from "../../assets/images/Upload-video-preview.jpg";
import uploadVideoIcon from "../../assets/images/icons/publish.svg";
import { Link, useNavigate } from "react-router-dom";

function UploadVideo() {

  const navigate = useNavigate();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    window.alert("Your video is published.");
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
            <label htmlFor="videoDescripton" className="uploadVideo__label">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              type="text"
              name="videoDescripton"
              id="videoDescripton"
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
