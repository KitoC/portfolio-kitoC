"use client";

import { useEffect, useRef, useState } from "react";
import { random, range } from "lodash";
import CSSCloud from "./CSSCloud";
import clsx from "clsx";

const AnimatedCloud = ({ sectionId, id }) => {
  const [scale] = useState(random(0.9, 1.4, true));
  const [coords] = useState([random(-10, 110), random(-10, 110)]);
  const [idleCoords, setIdleCoords] = useState([0, 0]);
  const [x, y] = idleCoords;

  const ref = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setIdleCoords([random(-20, 20), random(-20, 20)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={ref}
      id={`${sectionId}-${id}`}
      className={clsx("z-20 w-fit")}
      style={{
        scale,
        position: "absolute",
        left: `${coords[0]}%`,
        top: `${coords[1]}%`,
        transform: `translate(${x}px, ${y}px)`,
        transition: "all 4s",
      }}
    >
      <CSSCloud />
    </div>
  );
};

let section = 0;

const AnimatedClouds = ({ children, hasIsland }) => {
  const [sectionId] = useState(section++);

  if (hasIsland) {
    return (
      <div
        id={`cloud-section-${sectionId}`}
        className="w-screen h-screen pointer-events-none relative flex"
      >
        <div className=" p-24 w-2/3">{children}</div>

        <div class="w-1/3 relative">
          {range(4).map((cloud) => (
            <AnimatedCloud key={cloud} id={cloud} sectionId={sectionId} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      id={`cloud-section-${sectionId}`}
      className="w-screen h-screen pointer-events-none relative"
    >
      {range(8).map((cloud) => (
        <AnimatedCloud key={cloud} id={cloud} sectionId={sectionId} />
      ))}
    </div>
  );
};

export default AnimatedClouds;
