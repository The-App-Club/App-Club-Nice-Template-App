import './index.css';
import {Link} from 'react-router-dom';

function Welcome() {
  return (
    <div className="welcome-content">
      <h2>welcome page</h2>
      <Link to="/login">login</Link>
      <p className="welcome-sentence">welcome start</p>
      <p className="welcome-sentence">welcome</p>
      <p className="welcome-sentence">welcome</p>
      <p className="welcome-sentence">welcome</p>
      <p className="welcome-sentence">welcome</p>
      <p className="welcome-sentence">welcome</p>
      <p className="welcome-sentence">welcome</p>
      <p className="welcome-sentence">welcome</p>
      <p className="welcome-sentence">welcome</p>
      <p className="welcome-sentence">welcome</p>
      <p className="welcome-sentence">welcome</p>
      <p className="welcome-sentence">welcome</p>
      <p className="welcome-sentence">welcome</p>
      <p className="welcome-sentence">welcome</p>
      <p className="welcome-sentence">welcome end</p>
    </div>
  );
}

export {Welcome};
