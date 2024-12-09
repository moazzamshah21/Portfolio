import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const ScrollWriteM = () => {
  useEffect(() => {
    gsap.to("#marker", {
      motionPath: {
        path: "M 50 200 L 100 100 L 150 200 L 200 100 L 250 200", // Define the "M" path
        align: "#path",
        alignOrigin: [0.5, 0.5]
      },
      scrollTrigger: {
        trigger: "#scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: true
      }
    });
  }, []);

  return (
    <div>
      <div
        id="scroll-container"
        style={{ height: "200vh", background: "#f0f0f0", position: "relative" }}
      >
        <svg
          id="svg-container"
          viewBox="0 0 300 300"
          style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        >
          {/* "M" path */}
          <path
            id="path"
            d="M 50 200 L 100 100 L 150 200 L 200 100 L 250 200"
            fill="none"
            stroke="black"
            strokeWidth="2"
          />

          {/* Marker that follows the path */}
          <circle id="marker" cx="0" cy="0" r="5" fill="red" />
        </svg>
      </div>
    </div>
  );
};

export default ScrollWriteM;
