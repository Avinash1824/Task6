import './App.css';

function App() {
  const imageUrl1 = process.env.PUBLIC_URL + 'user.png';
  const imageUrl2 = process.env.PUBLIC_URL + 'web-developer-logo-design-29b5d4.png';
  const imageUrl3 = process.env.PUBLIC_URL + 'Java-Logo.png';
  const imageUrl4 = process.env.PUBLIC_URL + 'download.png';

  return (
    <>
      <div className='container-fluid' id='portfolio'>
        <div id='header'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4'><h1 id='logo'>Portfolio</h1></div>
              <div className='col-md-8'>
                <ul className='d-flex justify-content-md-end' id='menu'>
                  <li><a href='#home'>Home</a></li>
                  <li><a href='#skills'>Skills</a></li>
                  <li><a href='#projects'>Projects</a></li>
                  <li><a href='#contactus'>Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id='home'>
        <div id='banner' className='py-5'>
          <div className='container'>
            <div className='row mt-5'>
              <div className='col-lg-6'>
                <div className='banner-title'>
                  <h1 className='title'>Avinash</h1>
                  <p className='lead'>I'm a passionate learner and creative thinker, dedicated to growth, knowledge, and positive impact in a dynamic world.</p>
                </div>
              </div>
              <div className='col-lg-6' id='img'>
                <img src={imageUrl1} alt="Me" className="img-fluid rounded-circle" id='myimg' />
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className='container section' id='skills'>
          <div className='row'>
            <div className='col-md-12'>
              <h2 className='section-head'>Skills</h2>
            </div>
            <div className='col-md-4' id='cards'>
              <div className="card" >
                <img src={imageUrl2} alt="web" className="img-fluid" id='web' />
                <div className="card-body">
                  <h5 className="card-title">Web developer</h5>
                  <p className="card-text">Proficient in HTML, CSS, JavaScript, BootStrap, PHP, </p>
                </div>
              </div>
            </div>
            <div className='col-md-4' id='cards'>
              <div className="card" >
                <img src={imageUrl3} alt="java" className="img-fluid" id='java' />
                <div className="card-body">
                  <h5 className="card-title">Java</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className='col-md-4' id='cards'>
              <div className="card" >
                <img src={imageUrl4} alt="python" className="img-fluid" id='python' />
                <div className="card-body">
                  <h5 className="card-title">Python</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id='projects' className='container section'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <h2 className='section-head'>Projects</h2>
              </div>
              <div className='container' id='projects-details'>
                <div className='col'>
                  <ul>
                    
                    <li className='mt-2'><h4>•	Identifying The Patterns in The Placement Trends.</h4></li>
                    <p className='lead'>Data Preprocessing | Random Forest Classifier | Exploratory Data Analysis |Flask<br></br>
                    Developed a Machine Learning that classify the placement trends that integrates the web Integration using flask and the Prediction model deployed in the IBM cloud Watson Studio.</p>
                    <li className='mt-2'><h4>Smart Door Lock with Facial Recognition and Thermal Screening</h4></li>
                    <p className='lead'>Arduino UNO | ESP32 | Face Recognition<br></br>
                      Created a smart door lock system with facial recognition and Thermal Screening using Arduino UNO which
                      helps to detect the face, temperature of a person and open the door lock.</p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container section' id='contactus'>
        <div className='col-md-12'>
          <h2 className='contact-head text-dark'>Contact-Us</h2>
        </div>
        <ul className='contact'>
          <li className='details'>Phone Number: -7901005830</li>
          <li className='details'>Gmail: -gurusai62003@gmail.com</li>
          <li className='details'>Address: -Kurnool, Andhra Pradesh, India, 518004</li>
        </ul>
      </div>
    </>
  );
}

export default App;
