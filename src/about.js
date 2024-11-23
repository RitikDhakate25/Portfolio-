import {useEffect,useState} from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'



  // Make sure to create and link the CSS file

export default function About() {
  useEffect(()=>{
    Aos.init();
  })
  const [selectedSkill, setSelectedSkill] = useState("Proffesional");

  return (
    <div style={{backgroundColor:'#e9e9e9' ,width:"100%"}}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 pt-5">
            <h1 className="cavets text-center mt-5" style={{ fontSize: 70 }} data-aos="fade-right" data-aos-duration="1000">
              About
            </h1>
            <h3 className="cavets text-center" style={{ marginLeft: 100, fontSize: 50 }} data-aos="fade-right" data-aos-duration="1000">me</h3>
            <img
              
              src="https://plus.unsplash.com/premium_photo-1707816501228-1d814ad62d7b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGJveXxlbnwwfHwwfHx8MA%3D%3D"
              alt="imae"
              width="100%"
              height="400"
              className="text-center mt-md-4 mt-2 p-2"
              data-aos="fade-down" data-aos-duration="1000"
            />
            <p data-aos="fade-up" data-aos-duration="1000" className="abs text-center p-md-5 p-2 p-lg-5">
              Tempor ut tempor tempor consectetur. Adipisicing mollit est quis voluptate incididunt.
              Lorem exercitation officia ea sunt et sint commodo quis labore tempor voluptate cillum sit.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 mb-5 mb-md-5 mb-lg-5 mt-5 mt-md-5 mt-lg-5">
            <h3 className="cavets  m-md-2 mt-5" style={{ fontSize: 70 }}data-aos="fade-down" data-aos-duration="1000">My</h3>
            <h1 className="cavets ml-md-5" style={{ marginLeft: 100, fontSize: 50 }}data-aos="fade-right" data-aos-duration="1000">Skills</h1>
            
            {/* Skill Selection Links with Animated Underline */}
            <div className="d-flex d-md-flex d-lg-flex offset-md-1 mt-md-5 mt-4 mt-md-5 mt-lg-5"data-aos="fade-up" data-aos-duration="1000">
              <h2
                onClick={() => setSelectedSkill("Proffesional")}
                className={`cavets m-2 skill-link ${selectedSkill === "Proffesional" ? "active" : ""}`}
              >
                Profession
              </h2>
              <h2
                onClick={() => setSelectedSkill("Perosonal")}
                className={`cavets m-2 skill-link ${selectedSkill === "Perosonal" ? "active" : ""}`}
              >
                Personal info
              </h2>
              <h2
                onClick={() => setSelectedSkill("skills")}
                className={`cavets m-2 skill-link ${selectedSkill === "skills" ? "active" : ""}`}
              >
                Skills
              </h2>
            </div>

            {/* Conditionally Render Skill Content */}
            <div className="mt-5" style={{ marginLeft: 30 }}>
              {selectedSkill === "Proffesional" && (
                <div>
                  <h3 className="abs">Developer</h3>
                  <h6 className="cavets">Application/Web Developer</h6>
                  <h3 className="abs">Operating System Developer</h3>
                  <h6 className="cavets">UI/UX Developer</h6>
                </div>
              )}
              {selectedSkill === "Perosonal" && (
                <div>
                  <h3 className="abs">Name:</h3>
                  <h6 className="cavets">Ritik R. Dhakate</h6>
                  <h3 className="abs">Age:</h3>
                  <h6 className="cavets">19 years</h6>
                  <h3 className="abs">Address</h3>
                  <h6 className="cavets">Timki Chimabai Peth, Dadrapul Road, near Yadav Cycle Store</h6>
                  <h3 className="abs">Education</h3>
                  <h6 className="cavets">Studied 1st to 10th at Paradise Public School</h6>
                  <h3 className="abs">Diploma</h3>
                  <h6 className="cavets">Completed Diploma at Priyadarshini Polytechnic, Nagpur</h6>
                </div>
              )}
              {selectedSkill === "skills" && (
                <div>
                  <h3 className="abs">Strong Fundamentals</h3>
                  <h6 className="cavets">Web Development/App Development</h6>
                  <h6 className="cavets">Node.js</h6>
                  <h6 className="cavets">React.js</h6>
                  <h6 className="cavets">SQL</h6>
                  <h6 className="cavets">HTML, CSS, JavaScript</h6>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
