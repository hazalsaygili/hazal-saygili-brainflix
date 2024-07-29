import "./SideBar.scss";
import { Link } from "react-router-dom";

function SideBar({ videos }) {

  const baseURL = "http://localhost:8080";

  return (
    <div className="sidebar__container">
      <h3>NEXT VIDEOS</h3>

      {videos.map((video) => {
        return (
          <div key={video.id}>
            <Link to={"/videos/" + video.id} className="sidebar__imageWrapper">
              <img
                className="sidebar__image"
                src={baseURL + video.image}
                alt={video.title}
              />
              <div className="sidebar__text">
                <p className="sidebar__imageTitle"> {video.title}</p>
                <p> {video.channel}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default SideBar;
