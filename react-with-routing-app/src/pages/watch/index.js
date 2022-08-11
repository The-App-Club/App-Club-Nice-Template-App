import './index.css';
import {useLocation} from 'react-router-dom';

function Watch() {
  const q = new URLSearchParams(useLocation().search);

  const videoId = q.get('videoId');
  console.log('videoId', videoId);
  return (
    <div className="watch-content">
      <h2>watch page</h2>
      <div className="video">you see video {videoId}</div>
      <p className="watch-sentence">watch start</p>
      <p className="watch-sentence">watch</p>
      <p className="watch-sentence">watch</p>
      <p className="watch-sentence">watch</p>
      <p className="watch-sentence">watch</p>
      <p className="watch-sentence">watch</p>
      <p className="watch-sentence">watch</p>
      <p className="watch-sentence">watch</p>
      <p className="watch-sentence">watch</p>
      <p className="watch-sentence">watch</p>
      <p className="watch-sentence">watch</p>
      <p className="watch-sentence">watch</p>
      <p className="watch-sentence">watch</p>
      <p className="watch-sentence">watch</p>
      <p className="watch-sentence">watch</p>
      <p className="watch-sentence">watch</p>
      <p className="watch-sentence">watch</p>
      <p className="watch-sentence">watch</p>
      <p className="watch-sentence">watch</p>
      <p className="watch-sentence">watch</p>
      <p className="watch-sentence">watch</p>
      <p className="watch-sentence">watch</p>
      <p className="watch-sentence">watch</p>
      <p className="watch-sentence">watch</p>
      <p className="watch-sentence">watch</p>
      <p className="watch-sentence">watch</p>
      <p className="watch-sentence">watch</p>
      <p className="watch-sentence">watch</p>
      <p className="watch-sentence">watch end</p>
    </div>
  );
}

export {Watch};
