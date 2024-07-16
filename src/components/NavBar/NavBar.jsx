import "./NavBar.scss";
import brainFlixLogo from "../../assets/images/BrainFlix-logo.svg";
import mohanMurugeImg from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/images/icons/upload.svg";

function NavBar() {
  return (
    <div className="navbar__container">
      <img
        className="navbar__logo"
        src={brainFlixLogo}
        alt="Brain-Flix text with blue white play image"
      />
      <div className="navbar__wrapper">
        <input className="navbar__searchField" placeholder="Search" type="search" />
        <button className="navbar__uploadButton"><img src={uploadIcon} alt="upload icon"/> UPLOAD<span></span></button>
        <img
          className="navbar__mohanImg"
          src={mohanMurugeImg}
          alt="mohan muruge face"
        />
      </div>
    </div>
  );
}

export default NavBar;
