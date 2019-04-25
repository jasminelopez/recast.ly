// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import searchYoutube from './lib/searchYouTube.js';
import YOUTUBE_API_KEY from './config/youtube.js';


ReactDOM.render(<App searchYoutube={ searchYoutube } API_KEY={YOUTUBE_API_KEY}/>, document.getElementById('app'));