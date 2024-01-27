"use client";

import Image from "next/image";
import PlaneImage from "../_assets/plane-base.dxf.png";
import PlaneShadow from "../_assets/plane-base-shadow.svg";
import { usePrevious } from "../_utils/usePrevious";
import clsx from "clsx";
import { useCallback, useEffect, useState, useRef } from "react";
import { random, throttle } from "lodash";

const Animation = ({
  img,
  isIdle,
  offset = { x: 0, y: 0 },
  coords = [0, 0],
  isLanded,
}) => {
  const [x, y] = coords;
  // const [coordIndex, setCoordIndex] = useState(0);
  // const [degree, setDegree] = useState(0);

  // const [x, y] = coords[coordIndex];
  // const prevCoords = usePrevious([x, y]);
  // const [prevX, prevY] = prevCoords || [];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     let cursorAngle = 0;
  //     const delt = {
  //       x: prevX - x,
  //       y: prevY - y,
  //     };
  //     if (Math.abs(delt.x) < 3 && Math.abs(delt.y) < 3) return;
  //     cursorAngle = (Math.atan2(delt.y, delt.x) * 180) / Math.PI;
  //     console.log({ cursorAngle });
  //     if (!isIdle) return;

  //     setDegree(degree - 90);

  //     if (coordIndex === 3) {
  //       return setCoordIndex(0);
  //     }

  //     setCoordIndex(coordIndex + 1);
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, [coordIndex, isIdle, degree, prevX, prevY, x, y]);

  return (
    <div
      className="w-[100px] h-[100px] absolute z-10 transition-all duration-1000"
      style={{ left: offset.x, top: offset.y }}
    >
      <div className={clsx("pointer-events-none absolute", {})} style={{}}>
        <div
          className="[perspective: 100px] w-[100px] h-[100px]  "
          style={{ perspective: "100px", transform: "rotate(180deg)" }}
        >
          <div
            style={{ perspective: "100px" }}
            className={clsx("w-fit relative", {
              "animate-planeIdle": !isLanded,
              // "animate-planeCircle": isIdle,
            })}
          >
            <div
              className={clsx("w-fit relative")}
              style={{ animationFillMode: "forwards" }}
            >
              <div className="relative z-10">
                <Image
                  src={img}
                  alt="A quantas plane"
                  height="100"
                  width="100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Plane = ({ isLanded, setIsLanded, initialCoords }) => {
  const [isIdle, setIsIdle] = useState(true);
  const [x, setX] = useState(initialCoords[0]);
  const [y, setY] = useState(initialCoords[1]);

  const throttledSetX = useRef(throttle((newX) => setX(newX), 1000));
  const throttledSetY = useRef(throttle((newY) => setY(newY), 1000));

  const handleTakeoff = useCallback(() => {
    if (!isLanded) return;
    const airStrip = document.getElementById("airstrip-1");
    const { bottom } = airStrip.getBoundingClientRect();

    if (bottom <= 200) {
      setIsLanded(false);
    }
  }, [isLanded, setIsLanded]);

  useEffect(() => {
    const el = document.getElementById("scroll-container");

    const onScrollStart = () => {
      if (isLanded) {
        handleTakeoff(el.scrollTop);
      }

      if (el.scrollTop <= 400) return;

      const distance = 200;

      const nextY = y + random(-distance, distance);
      const nextX = x + random(-distance, distance);

      if (!isLanded && nextY > 0 && nextY < window.screen.height) {
        throttledSetY.current(nextY);
      }

      if (!isLanded && nextX > 0 && nextX < window.screen.width) {
        throttledSetX.current(nextX);
      }

      setIsIdle(false);
    };
    const onScrollEnd = () => {
      setIsIdle(true);
    };

    el.addEventListener("scroll", onScrollStart);
    el.addEventListener("scrollend", onScrollEnd);
    return () => {
      el.removeEventListener("scroll", onScrollStart);
      el.removeEventListener("scrollend", onScrollEnd);
    };
  }, [handleTakeoff, isLanded, y, x]);

  const shadowDisplacement = isLanded ? 13 : 80;

  return (
    <>
      <div
        onClick={handleTakeoff}
        className="sticky w-[100px] h-0 z-10"
        style={{
          left: `${x}px`,
          top: `${y}px`,
          transition: `all  ${isLanded ? "1000ms" : "2000ms"} ${
            isLanded ? "ease-in" : "ease-out"
          } 0ms`,
        }}
      >
        <div
          className={clsx("w-full h-full", {
            "animate-paneTakeOff": !isLanded,
          })}
          style={{
            transform: isLanded
              ? `scale(0.6) translateY(-30px)`
              : "scale(1) translateY(0)",
            transition: "transform 1000ms ease-in-out 0ms",
          }}
        >
          <Animation
            isLanded={isLanded}
            coords={[x, y]}
            isIdle={isIdle}
            img={PlaneShadow}
            offset={{
              x: -shadowDisplacement,
              y: shadowDisplacement,
            }}
          />
          <Animation
            isLanded={isLanded}
            coords={[x, y]}
            isIdle={isIdle}
            img={PlaneImage}
          />
        </div>
      </div>
    </>
  );
};

export default Plane;
