
import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from '../components/VideoList.js';
import VideoPlayer from '../components/VideoPlayer.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }
  
  handleClick(video) {
    this.setState({
      currentVideo: video
    });
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em> <VideoPlayer video={ this.state.currentVideo } /> </h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoViewer</em> <VideoList videos={ this.state.videos } handleClick={this.handleClick.bind(this)} /> </h5></div>
          </div>
        </div>
      </div>
    );
  }

}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
