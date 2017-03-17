import React, {Component} from 'react';
import VideoListItem from './listitem';

const ListMenu = (props) => {
  const videoitem = props.videos.map((video) => {return <VideoListItem
  onSelectedVideo={props.onSelectedVideo} key={video.id} video={video}/> });
  return (<div>
    <ul className='col-md-4 list-group'>
      {videoitem}
    </ul>
  </div>
 );
}

export default ListMenu;
