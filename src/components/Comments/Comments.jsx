import "./Comments.scss";
import MohanImage from "../../assets/images/Mohan-muruge.jpg";

function Comments({ comments }) {
  return (
    <>
      <h3>{comments.length} Comments</h3>

      <div className="comments__addCommentWrapper">
        <img
          src={MohanImage}
          className="comments__Img"
          alt="Mohan Muruge face image"
        />
        <form className="comments__addComment">
          <label for="commentInput" className="comments__label">
            JOIN THE CONVERSATION
          </label>
          <input
            type="text"
            name="commentInput"
            id="commentInput"
            className="comments__textFields"
            placeholder="Add a new comment"
          />
          <button className="comments__commentSubmitButton">COMMENT</button>
        </form>
      </div>

      {comments.map((comment) => {
        return (
          <div key={comment.id} className="comments__commentCardWrapper">
            <img src=" " className="comments__AnonymImg" />
            <div className="comments__commentCard">
              <div className="comments__commentedNameTimeWrapper">
                <p className="comments__commentedName">{comment.name}</p>
                <p className="comments__commentedTime">
                  {new Date(comment.timestamp).toLocaleDateString("en-US")}
                </p>
              </div>
              <p className="comments__commentedContent">{comment.comment}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Comments;
