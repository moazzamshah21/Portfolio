import React from 'react';
import './About.scss';
import ProfilePic from '../../Assets/Images/Profile.png'

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
              <div className='Exp-1 p-4'>
                <div className='Title-Time d-flex justify-content-between'>
                  <h6>MATTRICS PVT LTD</h6>
                  <h6>3/Aug/24 - Present</h6>
                </div>
                <div className='Designation'>
                  <h6>Web Developer</h6>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;
