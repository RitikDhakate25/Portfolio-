import {useEffect} from "react";
import Typewriter from 'typewriter-effect';
import Aos from 'aos'
import 'aos/dist/aos.css'
import "./App.css"
export default function Home() {
  useEffect(()=>{
    Aos.init();
  })
  return (
    <div style={{backgroundColor:'#000000'}}>
    <div className="container-fluid pt-lg-5" style={{backgroundColor:''}}>
      {/* top header start */}
      <div className="row mt-5">
        <div className="col-md-6 order-2 order-md-1 order-lg-1 mt-5"style={{textAlign: 'center',}}data-aos="fade-up"  data-aos-duration="3000">
          <h3 style={{ 
           color:'white'
          }} className="cavets justify-content-center align-items-center text-align-center"data-aos="fade-right"data-aos-offset="300"data-aos-easing="ease-in-sine"data-aos-duration="1000">Hello</h3>
          <h1 className="ra"data-aos="fade-up" data-aos-duration="1000">I'm Ritik Dhakate<br /> as<br />
          <Typewriter
  options={{
    strings: ['Web Devloper', 'App Devloper'],
    autoStart: true,
    loop: true,
  }}
/> </h1>
<div className="mt-5">
<div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}data-aos="fade-down"  data-aos-duration="3000">
      <button className="cavets btn p-2 p-md-2 p-lg-2 m-2" style={{ backgroundColor: '#ffffff', color: 'white', borderRadius: '30px', width: '220px', fontSize: '20px' }} >
      <a href="/Contact" style={{ textDecoration: 'none', color: '#000000' }} className="cavets">Get in Touch</a>
     
      </button>
      
      <button className=" btn p-2 p-md-2 p-lg-2 m-2" style={{ backgroundColor: '#ffffff', color: 'white', padding: '0px', borderRadius: '30px', width: '220px', fontSize: '20px' }}>
        <a href="/Contact" style={{ textDecoration: 'none', color: '#000000' }} className="cavets">Follow</a>
      </button>
    </div>
    </div>
        </div>
<div className="col-md-6 order-1 order-md-2 order-lg-2" data-aos="fade-up" data-aos-duration="3000" style={{ position: 'relative' }}>
  <img src="./images/premium_photo-1682096592504-5bc960bea6d7-removebg-preview.png" alt="image_png" width="100%" height="400px" />
  
  <div 
    className="tored"
    style={{
      width: '90%',
      height: '6px', /* Adjust height for visibility */
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0, /* Align it right below the image */
      filter: 'blur(1px)', /* Blur effect */
      backgroundColor: 'rgb(221,2,2)', /* Light transparent color */
      transition: 'all 0.3s ease-in-out', /* Smooth animation */
    }}
  >
    {/* Optional content in the div */}
  </div>
</div>

      </div>
      </div>
      {/* top header close */}
    <div className="container-fluid p-md-5 p-lg-5 p-3">
  <hr className="ml-md-5" style={{ backgroundColor: '#ffffff', width: '100%', height: '3px', marginTop: 0 }} data-aos="fade-right" data-aos-duration="1000" />
</div>

     {/* About section start */}
      <div className="container-fluid">
        <div className="row ">
          <div className="col-md-12 text-center "style={{justifyContent:'center',alignItems:'center',alignContent:'center',alignSelf:'center'}}>
            <h1 className="cavets" style={{textAlign:'center',marginTop:20,fontSize:40,color:'#ffffff'}}data-aos="fade-right" data-aos-duration="1000">About </h1>
            <h1 className="cavets" style={{textAlign:'center',marginTop:20,fontSize:30,marginLeft:120,color:'#c3c3c3ab'}}data-aos="fade-down" data-aos-duration="1000">me </h1>
            <p className="abs p-2 mt-5 mt-md-5 mt-lg-5 p-md-5 p-lg-5" style={{fontSize:20,color:'#c3c3c3'}}data-aos="fade-up" data-aos-duration="1000">Aliquip amet quis anim deserunt commodo sunt culpa proident incididunt esse. Qui magna sunt cupidatat aute in sit cupidatat anim esse enim nostrud sunt proident. Anim aliquip elit occaecat quis elit eu. Excepteur exercitation aute aute sint nisi. Proident irure aliqua eiusmod excepteur in ipsum sit.
Culpa incididunt in ipsum pariatur pariatur sint laborum voluptate sunt ea velit quis aliqua. Eiusmod adipisicing amet est laborum est dolor quis in Lorem nostrud. Enim id consequat irure cillum. Irure occaecat culpa id fugiat ex dolore. Magna eiusmod occaecat qui occaecat velit id elit elit ut amet occaecat excepteur mollit.</p>
              <div className="d-flex justify-content-center">
               <h3 className="seemore   p-2 p-md-3 p-lg-2 m-2" style={{  padding: '0px', borderRadius: '20px', width: '220px', fontSize: '20px' }}data-aos="fade-down" data-aos-duration="1000">
         <a href="/About" style={{textDecoration:"none",color:'white'}} className="cavets">see more</a>
      </h3>         
          </div>
          </div>

        </div>
  </div>
      
      {/* About section close */}
<div className="container-fluid p-md-5 p-lg-5 p-3">
  <hr className="ml-md-5" style={{ backgroundColor: '#ffffff', width: '100%', height: '3px', marginTop: 70 }} data-aos="fade-right" data-aos-duration="1000" />
</div>
     {/*Contact section start */}
<div className="container-fluid">
  
      <div className="row justify-content-center">
        <div className="col-md-12 justify-content-center" style={{}}>     
        <h1
            style={{
              textAlign: "center",
              fontSize: "60px",
              color: "#ffffff",
              marginBottom: "20px",
            }}
            className="cavets"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Contact 
          </h1>
          <h3 style={{
              textAlign: "center",
              fontSize: "40px",
              color: "#ffffff",
              marginLeft: "90px",
            }}
            className="cavets"
            data-aos="fade-up"
            data-aos-duration="1000">me</h3>
          </div>
        <div
          className="cmd col-md-6 col-10"
        data-aos="fade-up"
            data-aos-duration="1000"
          style={{
            
            borderRadius: "0px",
            padding: "20px",
            marginTop: "50px",
             marginBottom: "50px",
          }}
        >

          <form style={{ color: "white" }}>
            <div className="form-group">
              <label htmlFor="inputName" className="cavets">Name</label>
              <input
                type="text"
                className="form-control mt-2 mb-2"
                id="inputName"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputEmail"className="cavets">Email</label>
              <input
                type="email"
                className="form-control mt-2 mb-2"
                id="inputEmail"
                placeholder="Your Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputMessage"className="cavets">Message</label>
              <textarea
                className="form-control mt-2"
                id="inputMessage"
                rows="3"
                placeholder="Type your message here"
              ></textarea>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <a type="submit" className="cavets " style={{backgroundColor:'#ffffff',color:'#000000',padding:5,width:100,borderRadius:10,textDecoration:'none'}}>
                Submit
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
      {/* Contact section close */}
      
      
    
    </div>
    
  );
};