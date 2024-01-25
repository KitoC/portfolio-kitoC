"use client";

import { useEffect, useState } from "react";
import { random } from "lodash";
import styles from "./AnimatedClouds.module.css";

const CSSCloud = () => {
  return (
    <div>
      <div className={styles.cloud} />
      <div className={`${styles.cloud} ${styles.shadow}`} />
    </div>
  );
};

const AnimatedCloud = ({ startNow }) => {
  const [shouldRender, setShouldRender] = useState(startNow);
  const [xPosition, setXPosition] = useState(random(-10, 110));
  const [delay, setDelay] = useState(random(0, 8000));

  useEffect(() => {
    if (!shouldRender) return;

    const timout = setTimeout(
      () => {
        setXPosition(random(-10, 110));
        setDelay(random(0, 8000));
      },
      startNow ? 0 : 8000 + delay
    );

    return () => clearTimeout(timout);
  }, [xPosition, delay, shouldRender, startNow]);

  useEffect(() => {
    setTimeout(() => {
      setShouldRender(true);
    }, random(0, 6000));
  }, []);

  const scale = random(0.7, 1, true);

  if (!shouldRender) return null;

  return (
    <div
      key={xPosition}
      className="animate-cloudAnimation"
      style={{
        scale,
        position: "absolute",
        animationFillMode: "forwards",
        left: `${xPosition}%`,
      }}
    >
      <CSSCloud />
    </div>
  );
};

const AnimatedClouds = () => {
  return (
    <div className="absolute w-screen h-screen left-0 top-0 z-0 overflow-hidden pointer-events-none">
      <AnimatedCloud startNow />
      <AnimatedCloud />
      <AnimatedCloud />
      <AnimatedCloud />
      <AnimatedCloud />
      <AnimatedCloud />
      <AnimatedCloud />
      <AnimatedCloud />
      <AnimatedCloud />
      <AnimatedCloud />
      <AnimatedCloud />
      <AnimatedCloud />
    </div>
  );
};

export default AnimatedClouds;
