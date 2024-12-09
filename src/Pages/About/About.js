import React from 'react';
import './About.scss';
import ProfilePic from '../../Assets/Images/Profile.png';
import { FaReact } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import ScrollWriteM from "../Scroll/Scroll"
import MattricsLogo from "../../Assets/Images/image.png";
import Gsap from "../../Assets/Images/Gsap.png";
import { FaWordpress } from "react-icons/fa";



function About() {
  return (
    <section className='about'>
    <div className='About-Sec p-lg-5 p-2'>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-5 img-div p-4">
            <img src={ProfilePic} className='prof-pic' />
          </div>
          <div class="col-lg-8 content-div p-lg-5 p-2 d-flex justify-content-center align-items-center">
            <h3 className='greeting-text'>Hello 👋, </h3>
          </div>

          <p className='about-cntnt p-4'>
                I'm Moazzam Shah Khan, a dedicated Web Developer with a focus on building responsive, visually engaging, and user-centered websites. At Mattrics PVT LTD, I specialize in leveraging React and React Native to create dynamic, cross-platform applications that meet diverse client needs. With experience across various industries, I also work with WordPress to develop content-driven sites and use GSAP to bring interactive animations to life, enhancing the overall user experience.
                <br></br><br></br>
                Alongside my professional work, I'm pursuing a Bachelor's Degree in Computer Science at Bahria University, where I continue to deepen my expertise in technologies such as Python, JavaScript, and PHP. My passion for web development drives me to stay at the forefront of emerging trends and to seek out opportunities to connect and collaborate with fellow developers who share a vision for innovation in technology.
            </p>
          <div className='Experience-sec p-4 d-flex flex-column gap-3'>
              <h3>Experience</h3>
              <div className='Exp-1 p-0 d-flex flex-lg-row flex-column'>
                <div className='Company-Logo col-lg-3 p-0'>
                    <img src={MattricsLogo} className='m-logo'/>
                </div>
                <div className='col-lg-4 p-4 col-12 Title-Time d-flex flex-column justify-content-between'>
                  <h6><a href='https://www.linkedin.com/company/mattrics-pvt-ltd/posts/?feedView=all'>MATTRICS PVT LTD</a></h6>
                  <h6 className='m-Designation'>Web Developer</h6>
                </div>
                <div className='d-flex pt-lg-4 p-lg-0 p-4 justify-content-lg-end justify-content-start col-lg-4 col-12'>
                <h6>3/Aug/24 - Present</h6>
                </div>
              </div>
            </div>

          <div className='Skill-Sec p-4 d-flex flex-column gap-3'>
            <h3>Skills</h3>
            <div className='Skills d-flex flex-column flex-lg-row p-2 gap-3'>
                <div className='Skill col-sm col-lg p-3 d-flex flex-column align-items-center justify-contents-center gap-3'>
                  <FaReact className='icn'/>
                  <h4>React.js</h4>           
                </div>
                <div className='Skill col-sm-12 col-lg p-3 d-flex flex-column align-items-center justify-contents-center gap-3'>
                  <TbBrandReactNative className='icn'/>

                  <h4>React Native</h4>           
                </div>
                <div className='Skill col-sm-12 col-lg p-3 d-flex flex-column align-items-center justify-contents-center gap-3'>
                  <img src={Gsap} className='gsap-icn'/>
                  <h4>GSAP</h4>           
                </div>
            </div>
            <div className='Skills d-flex flex-column flex-lg-row p-2 gap-3'>
                <div className='Skill col-sm col-lg p-3 d-flex flex-column align-items-center justify-contents-center gap-3'>
                  <FaWordpress className='icn'/>
                  <h4>Wordpress</h4>           
                </div>
                {/* <div className='Skill col-sm-12 col-lg p-3 d-flex flex-column align-items-center justify-contents-center gap-3'>
                  <TbBrandReactNative className='icn'/>

                  <h4>React Native</h4>           
                </div>
                <div className='Skill col-sm-12 col-lg p-3 d-flex flex-column align-items-center justify-contents-center gap-3'>
                  <img src={Gsap} className='gsap-icn'/>
                  <h4>GSAP</h4>           
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;
