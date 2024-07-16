import "./Details.scss";
import viewsIcon from "../../assets/images/icons/views.svg";
import likesIcon from "../../assets/images/icons/likes.svg";

function Details({ activeVideo }) {
  return (
    <div>
      <h1>{activeVideo.title}</h1>
      <div className="details__wrapper">
        <div className="details__list">
          <span>By {activeVideo.channel}</span>{" "}
          <span>
            {new Date(activeVideo.timestamp).toLocaleDateString("en-US")}
          </span>
        </div>
        <div className="details__list">
          <span>
            <img src={viewsIcon} alt="Views" />
           {" " + activeVideo.views}
          </span>
          <span>
            <img src={likesIcon} alt="Likes" />
            {" " + activeVideo.likes}
          </span>
        </div>
      </div>
      <p>{activeVideo.description}</p>
    </div>
  );
}

export default Details;
