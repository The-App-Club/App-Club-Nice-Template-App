import './index.css';
import {Link} from 'react-router-dom';

function Video() {
  return (
    <div className="video-content">
      <h2>video page</h2>

      <ul>
        <li>
          <Link to="/watch?videoId=1">VIDEO 1</Link>
        </li>
        <li>
          <Link to="/watch?videoId=2">VIDEO 2</Link>
        </li>
        <li>
          <Link to="/watch?videoId=3">VIDEO 3</Link>
        </li>
      </ul>

      <p className="video-sentence">video start</p>
      <p className="video-sentence">video</p>
      <p className="video-sentence">video</p>
      <p className="video-sentence">video</p>
      <p className="video-sentence">video</p>
      <p className="video-sentence">video</p>
      <p className="video-sentence">video</p>
      <p className="video-sentence">video</p>
      <p className="video-sentence">video</p>
      <p className="video-sentence">video</p>
      <p className="video-sentence">video</p>
      <p className="video-sentence">video</p>
      <p className="video-sentence">video</p>
      <p className="video-sentence">video</p>
      <p className="video-sentence">video</p>
      <p className="video-sentence">video</p>
      <p className="video-sentence">video</p>
      <p className="video-sentence">video</p>
      <p className="video-sentence">video</p>
      <p className="video-sentence">video</p>
      <p className="video-sentence">video</p>
      <p className="video-sentence">video</p>
      <p className="video-sentence">video</p>
      <p className="video-sentence">video</p>
      <p className="video-sentence">video</p>
      <p className="video-sentence">video</p>
      <p className="video-sentence">video</p>
      <p className="video-sentence">video</p>
      <p className="video-sentence">video end</p>
    </div>
  );
}

export {Video};
