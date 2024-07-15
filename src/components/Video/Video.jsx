import './Video.scss';

function Video ({activeVideo}) {
    return (   
        <video className="video__Image" controls poster= {activeVideo.image}> Video cannot be displayed
        </video>
    )

}

export default Video;