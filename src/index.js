import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import search from 'youtube-search';
import SearchBar from './components/searchbar';
import ListMenu from './components/list';
import VideoPlayer from './components/videoplayer'
//const YOUTUBE_APIKEY = 'AIzaSyAXDHHOt7mKcY6i1XIKMYfY6rSpg7HHY5o';
const opts= {
  maxResults:5,
  key: 'AIzaSyAXDHHOt7mKcY6i1XIKMYfY6rSpg7HHY5o'
};
// create class component
class App extends Component {
  constructor(props) {
    super(props);
    this.state={videos:[],
      selectedVideo:null
  };
  this.searchfunc('carry minati');
  }

  searchfunc(term) {
    search(term,opts, (err, videos)=> {
      if(err) return console.log(err);
      this.setState({videos:videos,
        selectedVideo:videos[0]
      });
       console.log(videos);
    });
  }

  render() {
    const videoSearch = _.debounce((term)=> {this.searchfunc(term)}, 300);
    return (
      <div>
          <SearchBar onSearchedVideo= {videoSearch}/>
          <VideoPlayer video={this.state.selectedVideo}/>
          <ListMenu videos={this.state.videos}
          onSelectedVideo={selectVideo => this.setState({selectedVideo:selectVideo})}
          />
      </div>
    );
  }
}

//send the component to dom
ReactDOM.render(<App />, document.querySelector('.container'));
