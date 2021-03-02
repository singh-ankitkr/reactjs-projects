import React from 'react';


const VideoDetail = ({video}) => {
    if (!video){
        return <div>Loading</div>
    }

    const videoSr = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className="embed">
                <iframe title="videoPlayer" src={videoSr} style={{width: "100%", height: "500px"}}/>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default  VideoDetail;