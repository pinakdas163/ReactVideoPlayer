import React from 'react';

const VideoListItem = ({video, onSelectedVideo}) => {
  //const video = {props.video};
  //console.log(video);
  const url=video.thumbnails.default.url;
  return (<li onClick={() => onSelectedVideo(video)}
    className='list-group-item'>
      <div className='media'>
        <div className="media-left media-top">
          <img className="media-object" src={url} />
        </div>
        <div className="media-body">
          <div className="media-heading">
            {video.title}
          </div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;
