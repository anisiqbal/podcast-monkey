import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMagnifyingGlassChart } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
   <div>
    <h1>Project</h1>
    <a className='btn btn-primary'>Primary</a>

      <FontAwesomeIcon icon={faEnvelope} />
      <FontAwesomeIcon icon={faMagnifyingGlassChart} />
   </div>
  );
}

export default App;
