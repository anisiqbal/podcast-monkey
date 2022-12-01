import './homepage.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.PNG';
import image from '../../assets/img/slider-img.PNG';
import image1 from '../../assets/img/logo.PNG';
import image2 from '../../assets/img/icon1.PNG';
import image3 from '../../assets/img/Capture1.PNG';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faCaretDown, faCheck, faClock, faEnvelope, faMagnifyingGlass, faMagnifyingGlassChart } from '@fortawesome/free-solid-svg-icons'


function Homepage() {
  return (
    <div>
      {/* header */}
      <div className='header'>
        <div className='container'>
          <div className='row'>

            <div className="col-4 col-md-4 col-lg-3">
              <div className='logo'>
                <img src={logo} />
                {/* <Link to="/">Cv Analyzer</Link> */}
              </div>
            </div>

            <div className="col-8 col-md-8 col-lg-6">
              <div className="nav">
                <ul>
                  {/* <li><Link to="/">Home</Link></li> */}
                  <div className="dropdown">
                    <button className="dropbtn">What We Do <FontAwesomeIcon icon={faCaretDown} /></button>
                    <div className="dropdown-content">
                      <Link to="/">Content 1</Link>
                      <Link to="/">Content 2</Link>
                      <Link to="/">Contet 3</Link>
                    </div>
                  </div>

                  <li><Link to="/">Pricing</Link></li>
                  <li><Link to="/">Schedule a Call</Link></li>
                  <li><Link to="/">Help Center</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-4 col-md-4 col-lg-3">
              <div className='btn-header'>
                <a className='plain-purple me-2'>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                  Login
                </a>

                <a className='purple text-uppercase'>get started</a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* slider */}
      <div className='slider'>
        <div className='container'>
          <div className='row justify-content-center'>

            <div className="col-10">
              <div className='heading'>
                <h1>Complete <br /> Podcast Launch & <span>Setup</span></h1>
                <p className='pt-4'>Publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>

                <div className='btn-slider mt-5'>
                  <a className='purple text-uppercase me-2'>get started</a>
                  <a className='transperent-purple text-uppercase'>see pricing</a>
                </div>
              </div>
            </div>

            <div className='image'>
              <img src={image} />
            </div>

          </div>
        </div>
      </div>

      {/* launch */}
      <div className='launch'>
        <div className='container'>
          <div className='row justify-content-center'>

            <div className="col-10">
              <div className='launch-inner'>
                <div className='row'>

                  <div className='col-6'>
                    <div className='plain-card'>
                      <img src={image1} />
                      <h5>Podacast Monkey</h5>
                      <h3>VIP Call - Podcast Discovery Consultation</h3>

                      <p className='pt-4'><FontAwesomeIcon icon={faClock} /> 15 min</p>
                      <p><FontAwesomeIcon icon={faCamera} /> Web conferencing details provided upon confirmation</p>
                      <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>

                      <div className='btn-slider mt-4'>
                        <a className='purple text-uppercase'>See More</a>
                      </div>
                    </div>
                  </div>

                  <div className='col-6'>
                    <div className='launch-heading'>
                      <h2>Ready to Launch Your <span>Podacast</span> in Style?</h2>
                      <h5>Schedule a <span>15</span> minute call.</h5>
                      <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* support */}
      <div className='support'>
        <div className='container'>
          <div className='row justify-content-center'>

            <div className="col-9">
              <div className='support-inner'>
                <div className='row'>

                  <h1>Get The <span>Support</span> You Need Four Your <span>Podcast</span></h1>

                  <div className='col-4'>
                    <div className='step-in'>
                      <img src={image2} />
                      <h5>Step 1: Pre-Launch</h5>
                      <span><FontAwesomeIcon icon={faCheck} />Consultation & Plnning</span>
                      <span><FontAwesomeIcon icon={faCheck} />Stunning Cover Artwork</span>
                      <span><FontAwesomeIcon icon={faCheck} />Intro with Music</span>
                      <span><FontAwesomeIcon icon={faCheck} />Podcast Equiment Selection</span>
                      <span><FontAwesomeIcon icon={faCheck} />Picl your lauch date</span>
                    </div>
                  </div>

                  <div className='col-4'>
                    <div className='step-in'>
                      <img src={image2} />
                      <h5>Step 2: Pre-Launch</h5>
                      <span><FontAwesomeIcon icon={faCheck} />Consultation & Plnning</span>
                      <span><FontAwesomeIcon icon={faCheck} />Stunning Cover Artwork</span>
                      <span><FontAwesomeIcon icon={faCheck} />Intro with Music</span>
                      <span><FontAwesomeIcon icon={faCheck} />Podcast Equiment Selection</span>
                      <span><FontAwesomeIcon icon={faCheck} />Picl your lauch date</span>
                    </div>
                  </div>

                  <div className='col-4'>
                    <div className='step-in'>
                      <img src={image2} />
                      <h5>Step 3: Pre-Launch</h5>
                      <span><FontAwesomeIcon icon={faCheck} />Consultation & Plnning</span>
                      <span><FontAwesomeIcon icon={faCheck} />Stunning Cover Artwork</span>
                      <span><FontAwesomeIcon icon={faCheck} />Intro with Music</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className='col-9'>
              <div className='save-money'>
                <h1>Save Money with our <span>Launch</span> Package</h1>

                <div className='image'>
                  <img src={image3} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>












      {/* <a className="btn btn-primary">Primary</a>
      <FontAwesomeIcon icon={faEnvelope} />
      <FontAwesomeIcon icon={faMagnifyingGlassChart} /> */}
    </div>
  );
}

export default Homepage;
