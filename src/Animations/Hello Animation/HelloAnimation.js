import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './App.css';  // If you prefer using external CSS, otherwise you can style inline

const Hello = () => {
  const lettersRef = useRef([]);  // To hold references for each letter

  useEffect(() => {
    const letters = lettersRef.current;
    const tl = gsap.timeline({ repeat: 1, yoyo: true });

    tl.fromTo(
      letters,
      { opacity: 0, y: 50 },
      { duration: 0.6, opacity: 1, y: 0, stagger: 0.1, ease: 'power4.out' }
    )
      .to(
        letters,
        { duration: 1, rotation: 360, scale: 1.5, opacity: 0, stagger: 0.2, ease: 'power4.inOut' }
      );
  }, []);

  return (
    <div>
      <svg
        version="1.1"
        baseProfile="tiny"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="570px"
        height="150px"
        viewBox="0 0 570 150"
        xmlSpace="preserve"
      >
        <text
          ref={(el) => (lettersRef.current[0] = el)}
          x="50"
          y="60"
          fontSize="50"
          fill="none"
          stroke="#88CE02"
          strokeWidth="2"
        >
          H
        </text>
        <text
          ref={(el) => (lettersRef.current[1] = el)}
          x="120"
          y="60"
          fontSize="50"
          fill="none"
          stroke="#88CE02"
          strokeWidth="2"
        >
          E
        </text>
        <text
          ref={(el) => (lettersRef.current[2] = el)}
          x="190"
          y="60"
          fontSize="50"
          fill="none"
          stroke="#88CE02"
          strokeWidth="2"
        >
          L
        </text>
        <text
          ref={(el) => (lettersRef.current[3] = el)}
          x="260"
          y="60"
          fontSize="50"
          fill="none"
          stroke="#88CE02"
          strokeWidth="2"
        >
          L
        </text>
        <text
          ref={(el) => (lettersRef.current[4] = el)}
          x="330"
          y="60"
          fontSize="50"
          fill="none"
          stroke="#88CE02"
          strokeWidth="2"
        >
          O
        </text>
      </svg>
    </div>
  );
};

export default Hello;
