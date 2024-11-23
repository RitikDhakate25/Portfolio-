import {useEffect} from "react";
 import Typewriter from 'typewriter-effect';
import Aos from 'aos'
import 'aos/dist/aos.css'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook,faInstagram,faWhatsapp,faYoutube,faSquareSnapchat } from '@fortawesome/free-brands-svg-icons';
 import {  faHouse,faCircleInfo,faCheckCircle,faPhone,faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';
import "./App.css"
 
library.add(faFacebook,faInstagram,faWhatsapp,faYoutube,faSquareSnapchat,faHouse,faCircleInfo,faPhone,faCheckCircle,faHandshakeAngle);


 
export default function Footer() {
  useEffect(()=>{
    Aos.init();
  })
  return (
    <div className="ft container-fluid  " style={{margin:0}}>
 <div className="row d-flex">
   <div className="col-md-12 ">
      <div>
       <img src="./images/rrd.jpeg" alt="imafe" width="100" height="100" style={{borderRadius:50}} className="mt-4"data-aos="fade-down" data-aos-duration="1000" />
        <p className="abs" style={{color:'white',paddingTop:20}}data-aos="fade-up" data-aos-duration="1000">Veniam ad exercitation dolor veniam excepteur reprehenderit magna do dolore cupidatat est anim ad elit. Ut exercitation eu voluptate ad aute consectetur Lorem qui.</p>  
     </div>
<div className="d-md-flex p-md-5 p-lg-4 m-2">
  <div className="m-md-2 col-md-4 mt-5 m-lg-5">
  <ul style={{color:'white'}} className="abs">
              <li data-aos="fade-right" data-aos-duration="1000">ex Lorem cillum est i</li>
               <li data-aos="fade-right" data-aos-duration="1000">ex Lorem cillum est</li>
               <li data-aos="fade-right" data-aos-duration="1000"> ex Lorem cillum </li>
               <li data-aos="fade-right" data-aos-duration="1000">ex Lorem cilluisi</li>
               <li data-aos="fade-right" data-aos-duration="1000"> ex Lorem cilli</li>
     </ul>
</div>
    <div className="m-md-2 col-md-4 mt-5 m-lg-5">
  <ul style={{color:'white'}} className="abs">
              <li data-aos="fade-right" data-aos-duration="1000">ex Lorem cillum est i</li>
               <li data-aos="fade-right" data-aos-duration="1000">ex Lorem cillum est</li>
               <li data-aos="fade-right" data-aos-duration="1000"> ex Lorem cillum </li>
               <li data-aos="fade-right" data-aos-duration="1000">ex Lorem cilluisi</li>
               <li data-aos="fade-right" data-aos-duration="1000"> ex Lorem cilli</li>
     </ul>
</div>
   
 

<div className="m-md-4 mt-5 mb-5 col-md-4  m-lg-5">
  <ul style={{ listStyle: 'none', padding: 0, color: 'white',width:'100'}} className="abs">
              <li className="d-flex align-items-center mb-2"style={{fontSize:30}}data-aos="fade-up" data-aos-duration="1000">
               <FontAwesomeIcon icon={faHouse} className="me-2" data-aos="fade-up" data-aos-duration="1000"/>
                <a href="/Home" style={{ textDecoration: 'none', color: 'white' }}data-aos="fade-up" data-aos-duration="1000">Home</a>
              </li>
              <li className="d-flex align-items-center mb-2"style={{fontSize:30}}data-aos="fade-up" data-aos-duration="1000">
                <FontAwesomeIcon icon={faCircleInfo} className="me-2" data-aos="fade-up" data-aos-duration="1000" />
                <a href="/About" style={{ textDecoration: 'none', color: 'white' }}data-aos="fade-up" data-aos-duration="1000">About</a>
              </li>
              <li className="d-flex align-items-center mb-2"style={{fontSize:30}}data-aos="fade-up" data-aos-duration="1000">
        <FontAwesomeIcon icon={faPhone} className="me-2" data-aos="fade-up" data-aos-duration="1000" />
                <a href="/Contact" style={{ textDecoration: 'none', color: 'white' }}data-aos="fade-up" data-aos-duration="1000">Contact</a>
              </li>
              <li className="d-flex align-items-center mb-2" style={{fontSize:30}}data-aos="fade-up" data-aos-duration="1000">
<FontAwesomeIcon icon={faHandshakeAngle} className="me-2" data-aos="fade-up" data-aos-duration="1000" />
                <a href="/Help" style={{ textDecoration: 'none', color: 'white' }} data-aos="fade-up" data-aos-duration="1000">Help Us</a>
              </li>
            </ul>
</div>
</div>
 <div data-aos="fade-right" data-aos-duration="1000">
   <h1 className="let" style={{color:'white',fontSize:60,marginBottom:30}}><Typewriter
  options={{
    strings: ['Let`s connect with us'],
    autoStart: true,
    loop: true,
  }}
/> </h1>
   <a  className="cavets" style={{fontSize:20,backgroundColor:'white',color:'red',padding:10,borderRadius:5,marginLeft:30,marginTop:40,fontFamily:'',textDecoration:'none'}} href="/Contact"data-aos="fade-right" data-aos-duration="1000">connect</a>
 </div>
<div className="icon offset-md-2 offset-5 mt-md-5">
    <ul style={{ listStyle: 'none', padding: 0, color: 'white'}} className="d-md-flex d-lg-flex ">
              <li className="d-flex align-items-center p-2" data-aos="fade-right" data-aos-duration="1000">
<FontAwesomeIcon icon={faInstagram}  size="lg" style={{color: "#ba2b56",}} className="m-3" />
                <a href="https://www.instagram.com/ritik__2735?igsh=dTZweG1jaGtkeGFi" style={{ textDecoration: 'none', color: 'white' }}className="cavets">Instagaram</a>
              </li>
              <li className="d-flex align-items-center p-2" data-aos="fade-right" data-aos-duration="1000">
<FontAwesomeIcon icon={faYoutube} size="lg" style={{color: "#ff0000",}} className="m-3" />
                <a href="https://youtube.com/@ritikdhakate2735?si=_ccGMDt35i6geE-5" style={{ textDecoration: 'none', color: 'white' }}className="cavets">Youtube</a>
              </li>
              <li className="d-flex align-items-center p-2"data-aos="fade-right" data-aos-duration="1000">
                <FontAwesomeIcon icon={faSquareSnapchat}  size="lg" style={{color: "#ffff00",}} className="m-3" />
                <a href="https://www.snapchat.com/add/ritik_dhakate23?share_id=MXrkGS2bt98&locale=en-IN" style={{ textDecoration: 'none', color: 'white' }}className="cavets">Snapchat</a>
              </li>
              <li className="d-flex align-items-center p-2"data-aos="fade-right" data-aos-duration="1000">
<FontAwesomeIcon icon={faWhatsapp}  size="lg" style={{color: "#00ff00",}} className="m-3" />
                <a href="https://wa.me/7414928967" style={{ textDecoration: 'none', color: 'white' }}className="cavets">Whatsapp</a>
              </li>
            </ul>
</div>

   </div>
   <div className="col-md-12">
     
       
     <img src="./images/images-removebg-preview.png" alt="" width="100%" height="100%" className="p-2" data-aos="fade-up" data-aos-duration="1000"/>
     
          
   </div>
     
<div className="bottomfooter">
   <h3 className="abs copyright">copyright@gmail.com</h3>
 </div>
 </div>
 
    </div>
  );
}

 