import './Video.scss';

function Video ({activeVideo}) {

    const baseURL = "http://localhost:8080";

    return (   
        <video className="video__Image" controls poster= {baseURL + activeVideo.image}> Video cannot be displayed
        </video>
    )

}

export default Video;