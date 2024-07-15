import "./NavBar.scss";
import brainFlixLogo from "../../assets/images/BrainFlix-logo.svg";
import mohanMurugeImg from "../../assets/images/Mohan-muruge.jpg";

function NavBar() {
  return (
    <div className="navbar__container">
      <img
        className="navbar__logo"
        src={brainFlixLogo}
        alt="Brain-Flix text with blue white play image"
      />
      <div className="navbar__wrapper">
        <textarea className="navbar__searchField" placeholder="Search"></textarea>
        <button className="navbar__uploadButton">UPLOAD</button>
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
