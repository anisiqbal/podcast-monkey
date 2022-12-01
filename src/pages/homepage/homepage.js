import './homepage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMagnifyingGlassChart } from '@fortawesome/free-solid-svg-icons'

function Homepage() {
  return (
    <div>
      <h1>Homepage</h1>
      <a className="btn btn-primary">Primary</a>

      <FontAwesomeIcon icon={faEnvelope} />
      <FontAwesomeIcon icon={faMagnifyingGlassChart} />
    </div>
  );
}

export default Homepage;
