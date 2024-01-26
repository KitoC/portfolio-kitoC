"use client";

import { useEffect, useMemo, useState } from "react";
import { random, range } from "lodash";
import CSSCloud from "./CSSCloud";

const AnimatedCloud = ({ startNow }) => {
  const [scale] = useState(random(0.9, 1.4, true));
  const [coords] = useState([random(-10, 110), random(-10, 110)]);
  const [idleCoords, setIdleCoords] = useState([0, 0]);
  const [x, y] = idleCoords;

  useEffect(() => {
    const interval = setInterval(() => {
      setIdleCoords([random(-20, 20), random(-20, 20)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="z-20"
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

const AnimatedClouds = ({ children }) => {
  return (
    <div className="w-screen h-screen pointer-events-none relative">
      {range(8).map((cloud) => (
        <AnimatedCloud key={cloud} />
      ))}
      <div className=" p-24 w-2/3">{children}</div>
    </div>
  );
};

export default AnimatedClouds;
