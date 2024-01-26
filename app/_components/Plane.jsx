"use client";

import Image from "next/image";
import PlaneImage from "../_assets/plane-base.dxf.png";
import PlaneShadow from "../_assets/plane-base-shadow.svg";
import { usePrevious } from "../_utils/usePrevious";
import clsx from "clsx";
import { useEffect, useState } from "react";

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
    <div className="w-[100px] h-[100px] absolute z-10" style={{ ...offset }}>
      <div
        className={clsx("pointer-events-none absolute", {})}
        style={{
          transform: `translate(${x + offset.x}px, ${y + offset.y}px)`,
          transition: isLanded ? "" : "transform 2000ms ease-in-out 0ms",
          scale: isLanded ? 0.6 : 1,
        }}
      >
        <div
          className="[perspective: 100px] w-[100px] h-[100px] "
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

const Plane = () => {
  const [isLanded, setIsLanded] = useState(true);
  const [isIdle, setIsIdle] = useState(true);
  const [coords, setCoords] = useState([0, 0]);

  useEffect(() => {
    const el = document.getElementById("scroll-container");

    const onScrollStart = () => {
      console.log("scroll start");
      const airStrip = document.getElementById("airstrip-1");
      console.log(el.scrollTop);
      setIsIdle(false);
    };
    const onScrollEnd = () => {
      console.log("scroll end");
      setIsIdle(true);
    };

    el.addEventListener("scroll", onScrollStart);
    el.addEventListener("scrollend", onScrollEnd);
    return () => {
      el.removeEventListener("scroll", onScrollStart);
      el.removeEventListener("scrollend", onScrollEnd);
    };
  }, []);

  useEffect(() => {
    const airStrip = document.getElementById("airstrip-1");
    const { left, top } = airStrip.getBoundingClientRect();

    console.log({ left, top });
    setCoords([left + 80, top]);
    console.log(airStrip);
  }, []);

  const shadowDisplacement = isLanded ? 13 : 80;

  return (
    <div className="absolute w-screen h-screen top-0 left-0  z-10 pointer-events-none flex">
      <Animation
        isLanded={isLanded}
        coords={coords}
        isIdle={isIdle}
        img={PlaneShadow}
        offset={{
          x: -shadowDisplacement,
          y: shadowDisplacement,
        }}
      />
      <Animation
        isLanded={isLanded}
        coords={coords}
        isIdle={isIdle}
        img={PlaneImage}
      />
    </div>
  );
};

export default Plane;
