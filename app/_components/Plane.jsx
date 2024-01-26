"use client";

import Image from "next/image";
import PlaneImage from "../_assets/plane-base.dxf.png";
import PlaneShadow from "../_assets/plane-base-shadow.svg";
import { usePrevious } from "../_utils/usePrevious";
import clsx from "clsx";
import { useCallback, useEffect, useState } from "react";

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
      className="w-[100px] h-[100px] absolute z-10 "
      style={{ left: offset.x, top: offset.y }}
    >
      <div
        className={clsx("pointer-events-none absolute border", {})}
        style={{}}
      >
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

const Plane = () => {
  const [isLanded, setIsLanded] = useState(true);
  const [isIdle, setIsIdle] = useState(true);
  const [coords, setCoords] = useState([0, 0]);

  const handleTakeoff = useCallback(() => {
    if (!isLanded) return;
    const airStrip = document.getElementById("airstrip-1");
    const { left, top, height } = airStrip.getBoundingClientRect();

    if (top < 0 && Math.abs(top) + coords[1] >= height - 60) {
      setIsLanded(false);
    }
  }, [coords, isLanded]);

  useEffect(() => {
    const el = document.getElementById("scroll-container");

    const onScrollStart = () => {
      handleTakeoff();
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
  }, [coords, handleTakeoff]);

  useEffect(() => {
    const airStrip = document.getElementById("airstrip-1");
    const { left, top } = airStrip.getBoundingClientRect();

    console.log({ left, top });
    setCoords([left - 30, top]);
    console.log(airStrip);
  }, []);

  const shadowDisplacement = isLanded ? 13 : 80;

  console.log({ coords });
  return (
    <div className="absolute w-screen h-screen top-0 left-0  z-10 pointer-events-none flex">
      <div
        className="absolute w-[100px] h-[100px]"
        style={{
          transform: `translate(${coords[0]}px, ${coords[1]}px)`,
          transition: "transform 2000ms ease-in-out 0ms",
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
            transition: "transform 2000ms ease-in-out 0ms",
          }}
        >
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
      </div>
    </div>
  );
};

export default Plane;
