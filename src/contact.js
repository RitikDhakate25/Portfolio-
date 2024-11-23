import {useEffect} from "react";
import "./App.css" 
import Aos from 'aos'
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook,faInstagram,faWhatsapp,faYoutube,faSquareSnapchat } from '@fortawesome/free-brands-svg-icons';
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faFacebook,faInstagram,faWhatsapp,faYoutube,faSquareSnapchat,faPhone);

export default function About() {
  useEffect(()=>{
    Aos.init();
  })
  return (
    <div style={{backgroyndColor:'#e9e9e9'}}>
      <div className="container-fluid">
        <div className="row"style={{justifyContent:'center' }}>
          <div className="col-md-12 pt-5">
            <h1 className="cavets text-center mt-5" style={{ fontSize: 70 }} data-aos="fade-down" data-aos-duration="1000">
              Contact
            </h1>
            <h3 className="cavets text-center" style={{ fontSize: 50 }}data-aos="fade-right" data-aos-duration="1000">me</h3>
          </div>
       <img src="./images/rrd.jpg" alt="imafe" width="300" height="500" style={{borderRadius:50,padding:40}}className=" m-md-5" data-aos="fade-up" data-aos-duration="1000"/>
          
              
          <div className=" col-md-4">
            <a href="mailto:ritikdhakate28@gmail.com" style={{textDecoration:'none'}}>
            <div className="cd whatsapp"data-aos="fade-right" data-aos-duration="1000">
              <h2 className="text-center"><FontAwesomeIcon icon={faEnvelope} style={{color: "#e62023",}} className="m-3" /></h2>
                <a href="mailto:ritikdhakate28@gmail.com" style={{ textDecoration: 'none', color: 'white' }} className="cavets">Gmail</a>
            </div>
           </a>
          </div>
              
          
          <div className=" col-md-4">
            <a href="https://wa.me/7414928967" style={{textDecoration:'none'}}>
            <div className="cd whatsapp"data-aos="fade-up" data-aos-duration="1000">
              <h2 className="text-center"><FontAwesomeIcon icon={faPhone} bounce size="lg" style={{color: "#229cba",}} className="m-3"/></h2>
                <a href="https://wa.me/7414928967" style={{ textDecoration: 'none', color: 'white' }} className="cavets">calling</a>
            </div>
           </a>
          </div>
          
        </div>
      </div>

      {/* Social Media Section */}
      <div className="container-fluid">
        <div className="row text-center"style={{justifyContent:'center',margin:10}}>
          <div className="col-md-12 mb-md-4 mt-md-5 mb-lg-5 mt-lg-5 mb-3 mt-4">
            <h1 className="cavets">Connect with Social Media</h1>
          </div>
 
          <div className=" col-md-5 m-md-3">
            <a href="https://wa.me/7414928967" style={{textDecoration:'none'}}>
            <div className="cd whatsapp"data-aos="fade-down" data-aos-duration="1000">
              <h2 className="text-center"><FontAwesomeIcon icon={faWhatsapp} bounce size="lg" style={{color: "#00ff00",}} className="m-3" /></h2>
                <a href="https://wa.me/7414928967" style={{ textDecoration: 'none', color: 'white' }}className="cavets">Whatsapp</a>
            </div>
           </a>
          </div>
          
                    <div className=" col-md-5 m-md-3">
            <a href="https://www.snapchat.com/add/ritik_dhakate23?share_id=MXrkGS2bt98&locale=en-IN" style={{textDecoration:'none'}}>
            <div className="cd whatsapp"data-aos="fade-up" data-aos-duration="1000">
              <h2 className="text-center"><FontAwesomeIcon icon={faSquareSnapchat} beat size="lg" style={{color: "#ffff00",}} className="m-3" /></h2>
                <a href="https://www.snapchat.com/add/ritik_dhakate23?share_id=MXrkGS2bt98&locale=en-IN" style={{ textDecoration: 'none', color: 'white' }}className="cavets">snapchat</a>
            </div>
           </a>
          </div>
          <div className=" col-md-5 m-md-3">
            <a href="https://www.instagram.com/ritik__2735?igsh=dTZweG1jaGtkeGFi" style={{textDecoration:'none'}}>
            <div className="cd whatsapp"data-aos="fade-right" data-aos-duration="1000">
              <h2 className="text-center"><FontAwesomeIcon icon={faInstagram} flip size="lg" style={{color: "#ba2b56",}} className="m-3 " /></h2>
                <a href="https://www.instagram.com/ritik__2735?igsh=dTZweG1jaGtkeGFi" style={{ textDecoration: 'none', color: 'white' }}className="cavets">Instagram</a>
            </div>
           </a>
          </div>
 
            <div className=" col-md-5 m-md-3">
            <a href="https://youtube.com/@ritikdhakate2735?si=_ccGMDt35i6geE-5" style={{textDecoration:'none'}}>
            <div className="cd whatsapp"data-aos="fade-up" data-aos-duration="1000">
              <h2 className="text-center"><FontAwesomeIcon icon={faYoutube} shake size="lg" style={{color: "#ff0000",}} className="m-3" /></h2>
                <a href="https://youtube.com/@ritikdhakate2735?si=_ccGMDt35i6geE-5" style={{ textDecoration: 'none', color: 'white' }}className="cavets">youtube</a>
            </div>
           </a>
          </div>
          
        </div>
      </div>
      {/* Social Media Section End */}
    </div>
  );
};