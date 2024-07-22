import "./SideBar.scss";
import { Link } from "react-router-dom";

function SideBar({ videos }) {
  return (
    <div className="sidebar__container">
      <h3>NEXT VIDEOS</h3>

      {videos.map((video) => {
        return (
          <div key={video.id}>
            <Link to={"/videos/" + video.id} className="sidebar__imageWrapper">
              <img
                className="sidebar__image"
                src={video.image}
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
