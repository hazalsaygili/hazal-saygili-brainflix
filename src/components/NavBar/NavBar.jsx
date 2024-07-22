import "./NavBar.scss";
import { Link } from "react-router-dom";
import brainFlixLogo from "../../assets/images/BrainFlix-logo.svg";
import mohanMurugeImg from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/images/icons/upload.svg";

function NavBar() {
  return (
    <div className="navbar__container">
      <Link to="/" className="navbar__link">
        <img //link
          className="navbar__logo"
          src={brainFlixLogo}
          alt="Brain-Flix text with blue white play image"
        />
      </Link>
      <div className="navbar__wrapper">
        <input
          className="navbar__searchField"
          placeholder="Search"
          type="search"
        />
        <img
          className="navbar__mohanImg"
          src={mohanMurugeImg}
          alt="mohan muruge face"
        />
        <Link to="/upload-video" className="navbar__uploadButton">
          <button className="navbar__uploadButton">
            <img src={uploadIcon} alt="upload icon" /> UPLOAD<span></span>
          </button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
