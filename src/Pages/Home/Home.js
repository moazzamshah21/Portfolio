import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Home.scss'

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const About2Ref = useRef(null);
  const con2Ref = useRef([]);
  const Aboutc2Ref = useRef([]);
  const h1refcon2 = useRef([]);
  const h1span1 = useRef([]);
  const h1span2 = useRef([]);
  const h1span3 = useRef([]);
  const h1span4 = useRef([]);
  const h1span5 = useRef([]);
  const h1span6 = useRef([]);
  const h1span7 = useRef([]);
  const h1span8 = useRef([]);

  useEffect(()=>{
    // gsap.fromTo(About2Ref.current, 
    //   { 
    //     opacity:0,
    //    }, 
    //   { 
    //     opacity: 1,
    //     scrollTrigger: {
    //       trigger: Aboutc2Ref.current,
    //       start: "0px",
    //       end: "100vh",
    //       scrub: 0,
    //     }
    //   }
    // );
    

    gsap.fromTo(con2Ref.current, 
      { 
        clipPath: 'polygon(20.42% 19.26%, 79.58% 19.26%, 79.58% 80.74%, 20.42% 80.74%)', // Initial state (visible until 300px)
      }, 
      { 
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', // Transition to full coverage
        scrollTrigger: {
          trigger: Aboutc2Ref.current,
          start: "top", // Start animating after scrolling 300px
          end: "center", // Complete the animation over the next 300px of scrolling
          scrub: 1, // Smooth transition as the user scrolls
        }
      }
    );
// heading fade-up-in
    gsap.fromTo(h1span1.current, 
      { 
        y: 100,
        opacity: 0,
       }, 
      { 
        y: 0,
        opacity: 1,
        delay: 0,
        scrollTrigger: {
          trigger: About2Ref.current,
          start: "100vh",
          end: "200vh",
          scrub: 1,
        }
      }
    );
    gsap.fromTo(h1span2.current, 
      { 
        y: 130,
        opacity: 0,
       }, 
      { 
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: About2Ref.current,
          start: "100vh",
          end: "200vh",
          scrub: 1,
        }
      }
    );
    gsap.fromTo(h1span3.current, 
      { 
        y: 150,
        opacity: 0,
       }, 
      { 
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: About2Ref.current,
          start: "100vh",
          end: "200vh",
          scrub: 1,
        }
      }
    );
    gsap.fromTo(h1span4.current, 
      { 
        y: 170,
        opacity: 0,
       }, 
      { 
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: About2Ref.current,
          start: "100vh",
          end: "200vh",
          scrub: 1,
        }
      }
    );
    gsap.fromTo(h1span5.current, 
      { 
        y: 170,
        opacity: 0,
       }, 
      { 
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: About2Ref.current,
          start: "100vh",
          end: "200vh",
          scrub: 1,
        }
      }
    );
    gsap.fromTo(h1span6.current, 
      { 
        y: 150,
        opacity: 0,
       }, 
      { 
        y: 0,
        opacity: 1,
        delay: 0.4,
        scrollTrigger: {
          trigger: About2Ref.current,
          start: "100vh",
          end: "200vh",
          scrub: 1,
        }
      }
    );
    gsap.fromTo(h1span7.current, 
      { 
        y: 130,
        opacity: 0,
       }, 
      { 
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: About2Ref.current,
          start: "100vh",
          end: "300vh",
          scrub: 1,
        }
      }
    );
    gsap.fromTo(h1span8.current, 
      { 
        y: 100,
        opacity: 0,
       }, 
      { 
        y: 0,
        opacity: 1,
        delay: 0,
        scrollTrigger: {
          trigger: About2Ref.current,
          start: "100vh",
          end: "200vh",
          scrub: 1,
        }
      }
    );



    gsap.fromTo(con2Ref.current, 
      { 
        clipPath: 'circle(100% at 50% 50%)',
        filter: 'blur(0px)', // Animate to no blur
      }, 
      { 
        clipPath: 'circle(20% at 50% 50%)', // Transition to a smaller circle
        filter: 'blur(3px)',
        scrollTrigger: {
          trigger: Aboutc2Ref.current,
          start: "center",
          end: "bottom",
          scrub: 1, // Use scrub to synchronize with the scroll position
        }
      }
    );

  });

  return(
<section className="aboutcon2" ref={Aboutc2Ref}>
      <section className="about-section2" ref={About2Ref}>
      <container className="container2" ref={con2Ref}>
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
      </container>
      </section>
      </section>
  );
}

export default Home;
