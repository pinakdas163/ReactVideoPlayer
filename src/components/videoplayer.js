import React from 'react';

const VideoPlayer = ({video}) => {
  if(!video){
    return (
      <div className="progress">
          <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" width="60%">
              <span className="sr-only">60% Complete</span>
          </div>
      </div>
    );
  }
  const videoID=video.id;
  console.log(videoID);
  const url=`https://www.youtube.com/embed/${videoID}`;
  return (
    <div className='video-detail'>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div>{video.title}</div>
      <div>{video.description}</div>
    </div>
  );
}

export default VideoPlayer;
