import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Home.scss'

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const About2Ref = useRef(null);
  const con2Ref = useRef(null);
  const Aboutc2Ref = useRef(null);
  const h1refcon2 = useRef(null);
  const h1span1 = useRef(null);
  const h1span2 = useRef(null);
  const h1span3 = useRef(null);
  const h1span4 = useRef(null);
  const h1span5 = useRef(null);
  const h1span6 = useRef(null);
  const h1span7 = useRef(null);
  const h1span8 = useRef(null);

  // Function to handle mouse movement for the background effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const xPos = clientX / window.innerWidth;  // Normalize mouse X position
    const yPos = clientY / window.innerHeight; // Normalize mouse Y position

    // Adjust the background position using GSAP
    gsap.to(con2Ref.current, {
      backgroundPosition: `${xPos * 100}% ${yPos * 100}%`, // Move the background based on mouse position
      duration: 0.8, // Smooth transition
    });
  };

  useEffect(() => {
    // Add event listener for mouse move
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    gsap.fromTo(con2Ref.current, 
      { 
        clipPath: 'polygon(20.42% 19.26%, 79.58% 19.26%, 79.58% 80.74%, 20.42% 80.74%)', // Initial state
      }, 
      { 
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', // Transition to full coverage
        scrollTrigger: {
          trigger: Aboutc2Ref.current,
          start: "top 30%",
          end: "center 50%",
          scrub: 1,
        }
      }
    );

    // Heading fade-up-in animations for each span
    const spanAnimation = (spanRef, startY) => {
      gsap.fromTo(spanRef.current, 
        { 
          y: startY,
          opacity: 0,
        }, 
        { 
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: About2Ref.current,
            start: "top 0%",
            end: "center 0%",
            scrub: 1,
          }
        }
      );
    };

    // Apply the fade-up-in animation to each span
    spanAnimation(h1span1, 100);
    spanAnimation(h1span2, 130);
    spanAnimation(h1span3, 150);
    spanAnimation(h1span4, 170);
    spanAnimation(h1span5, 170);
    spanAnimation(h1span6, 150);
    spanAnimation(h1span7, 130);
    spanAnimation(h1span8, 100);

    gsap.fromTo(con2Ref.current, 
      { 
        clipPath: 'circle(100% at 50% 50%)',
        filter: 'blur(0px)',
      }, 
      { 
        clipPath: 'circle(10% at 50% 50%)',
        filter: 'blur(3px)',
        scrollTrigger: {
          trigger: Aboutc2Ref.current,
          start: "center",
          end: "bottom",
          scrub: 1,
        }
      }
    );
  }, []);

  return (
    <>
      <section className="aboutcon2" ref={Aboutc2Ref}>
        <section className="about-section2" ref={About2Ref}>
          <div className="container2" ref={con2Ref}>
            <h1 ref={h1refcon2}>
              <span ref={h1span1}>W</span>
              <span ref={h1span2}>E</span>
              <span ref={h1span3}>L</span>
              <span ref={h1span4}>C</span>
              <span ref={h1span5}>O</span>
              <span ref={h1span6}>M</span>
              <span ref={h1span7}>E</span>
              <span ref={h1span8}>.</span>
            </h1>
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
