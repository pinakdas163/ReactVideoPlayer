import React, {Component} from 'react';

// const SearchBar = () => {
//   return <input className='form-control' placeholder='search..' />;
// };

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state={searchkey : ''};
  }
  render() {
    return (
    <div className='search-bar'>
    <input className='form-control'
    value={this.state.searchkey}
    onChange= {event => this.onEventChange(event.target.value)} />

    </div>
    );
   }

  onEventChange(searchkey) {
    this.setState({searchkey});
    this.props.onSearchedVideo(searchkey);
  }
}
//onChange={(event) => this.setState({term:event.target.vaue})}
export default SearchBar;
