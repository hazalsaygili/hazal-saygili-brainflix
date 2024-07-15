import "./SideBar.scss";

function SideBar({ videos, handleVideoClick }) {
  return (
    <div className="sidebar__container">
      <h3>NEXT VIDEOS</h3>

      {videos.map((video) => {
        return (
          <div key={video.id}>
            <div className="sidebar__imageWrapper"  onClick={() => handleVideoClick(video.id)}>
              <img
                className="sidebar__image"
                src={video.image}
                alt={video.title}
              />
              <div>
                <p className="sidebar__imageTitle"> {video.title}</p>
                <p> {video.channel}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SideBar;
