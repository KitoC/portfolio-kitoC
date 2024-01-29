"use client";

import Image from "next/image";
import PlaneImage from "../_assets/plane-base.dxf.png";
import PlaneShadow from "../_assets/plane-base-shadow.svg";
import clsx from "clsx";
import { useCallback, useEffect, useState, useRef, useMemo } from "react";
import { debounce } from "lodash";
import { useWindowSize, usePrevious } from "@uidotdev/usehooks";

const FLY_SPEED = 1000;
const IDLE_SPEED = 200;

const STATES = {
  LANDED: "LANDED",
  FLYING: "FLYING",
  IDLING: "IDLING",
  TAKING_OFF: "TAKING_OFF",
  POSITIONING: "POSITIONING",
  POSITIONED: "POSITIONED",
};

const Animation = ({
  img,
  offset = { x: 0, y: 0 },
  scrollDirection,
  position,
  state,
}) => {
  const prevPosition = usePrevious(position);
  const [direction, setDirection] = useState(270);

  const handleDirectionChange = useCallback(
    (dir, debug) => {
      let newDirection = dir;

      while (Math.abs(direction - newDirection) > 180) {
        if (newDirection > direction) {
          newDirection -= 360;
        } else if (newDirection < direction) {
          newDirection += 360;
        }
      }

      if (debug) {
        console.log(newDirection, direction);
      }

      setDirection(newDirection);
    },
    [direction]
  );

  useEffect(() => {
    if (
      [STATES.IDLING, STATES.POSITIONING, STATES.POSITIONED].includes(state)
    ) {
      const delt = {
        x: prevPosition?.x - position.x || 0,
        y: prevPosition?.y - position.y || 0,
      };

      if (Math.abs(delt.x) < 3 && Math.abs(delt.y) < 3) return;

      handleDirectionChange(
        Math.floor((Math.atan2(delt.y, delt.x) * 180) / Math.PI)
      );
    } else {
      handleDirectionChange(scrollDirection === "s" ? 270 : 90, true);
    }
    console.log(state);
  }, [
    prevPosition,
    position,
    direction,
    handleDirectionChange,
    scrollDirection,
    state,
  ]);

  return (
    <div
      className="w-[100px] h-[100px] absolute z-10 transition-all duration-1000"
      style={{ left: offset.x, top: offset.y }}
    >
      <div className={clsx("pointer-events-none absolute", {})} style={{}}>
        <div
          className="[perspective: 100px] w-[100px] h-[100px] transition-all ease-linear"
          style={{
            perspective: "100px",
            transform: `rotate(${direction - 90}deg)`,
            transitionDuration: `200ms`,
          }}
        >
          <div
            className={clsx("w-fit relative", {
              "animate-planeIdle": state !== STATES.LANDED,

              // "animate-planeCircle": isIdle,
            })}
            style={{
              perspective: "100px",
              // transform: `rotate(180deg)`
            }}
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

const Plane = ({ initialCoords }) => {
  const [index, setIndex] = useState(0);
  const [state, setState] = useState(STATES.LANDED);
  const [idleCoords, setIdleCoords] = useState([]);
  const [position, setPosition] = useState({
    x: initialCoords[0],
    y: initialCoords[1],
  });

  const prevState = usePrevious();

  let movementSpeed = state === STATES.IDLING ? IDLE_SPEED : FLY_SPEED;

  const [scrollY, setScrollY] = useState(initialCoords[1]);
  const [scrollDirection, setScrollDirection] = useState("s");

  const windowSize = useWindowSize();

  const windowCenter = useMemo(
    () => ({
      x: (windowSize.width - 100) / 2,
      y: (windowSize.height - 192) / 2,
    }),
    [windowSize]
  );

  const debouncedSetIdle = useRef(debounce(() => setState(STATES.IDLING), 500));

  const handleTakeoff = useCallback(() => {
    const airStrip = document.getElementById("airstrip-1");
    const { bottom } = airStrip.getBoundingClientRect();

    if (bottom <= 200) {
      setState(STATES.TAKING_OFF);

      setTimeout(() => {
        setPosition(idleCoords[index]);
        setState(STATES.POSITIONING);
      }, 1000);
    }
  }, [idleCoords, index]);

  useEffect(() => {
    const el = document.getElementById("scroll-container");

    const onScrollStart = () => {
      const nextDirection = scrollY < el.scrollTop ? "s" : "n";
      setScrollY(el.scrollTop);
      if (scrollDirection !== nextDirection) {
        setScrollDirection(nextDirection);
      }

      if (state === STATES.TAKING_OFF) return;

      if (state === STATES.LANDED) {
        handleTakeoff(el.scrollTop);
      } else {
        setState(STATES.FLYING);
      }
    };

    const onScrollEnd = () => {
      if (state === STATES.FLYING) {
        debouncedSetIdle.current(true);
      }
    };

    el.addEventListener("scroll", onScrollStart);
    el.addEventListener("scrollend", onScrollEnd);

    return () => {
      el.removeEventListener("scroll", onScrollStart);
      el.removeEventListener("scrollend", onScrollEnd);
    };
  }, [handleTakeoff, state, scrollY, index, scrollDirection]);

  useEffect(() => {
    const points = [];
    const items = 128;
    const r = 200;

    for (let i = 0; i < items; i++) {
      const x = windowCenter.x + r * Math.cos((2 * Math.PI * i) / items);
      const y = windowCenter.y + r * Math.sin((2 * Math.PI * i) / items);

      points.push({ x, y });
    }
    setIdleCoords(points);
  }, [windowCenter]);

  useEffect(() => {
    if ([STATES.FLYING, STATES.LANDED, STATES.TAKING_OFF].includes(state)) {
      return;
    }

    const moveToNextPoint = () => {
      const nextIndex = index === idleCoords.length - 1 ? 0 : index + 1;

      setPosition(idleCoords[nextIndex]);

      setIndex(nextIndex);
    };

    const timeout = setTimeout(moveToNextPoint, movementSpeed);
    return () => clearTimeout(timeout);
  }, [index, state, prevState, movementSpeed, idleCoords]);

  const shadowDisplacement = state === STATES.LANDED ? 13 : 80;

  return (
    <>
      {/* <div className="fixed left-0 top-0 z-50">
        <p>STATE: {state}</p>
        <p>movementSpeed: {movementSpeed}</p>
      </div> */}

      {/* <div
        className="fixed w-[5px] h-[5px] bg-red-600"
        style={{ left: `${position?.x}px`, top: `${position?.y}px` }}
      ></div> */}
      <div
        onClick={handleTakeoff}
        className={clsx("sticky w-[100px] h-0 z-10 transition-all", {
          "ease-in": state === STATES.TAKING_OFF,
          "ease-linear": state !== STATES.TAKING_OFF,
        })}
        style={{
          left: `${position?.x}px`,
          top: `${position?.y}px`,
          transitionDuration: `${movementSpeed}ms`,
        }}
      >
        <div
          className={clsx("w-full h-full", {
            "animate-planeTakeOff": state !== STATES.LANDED,
          })}
          style={{
            transform: `scale(0.6) translateY(-30px)`,
          }}
        >
          <Animation
            movementSpeed={movementSpeed}
            position={position}
            scrollDirection={scrollDirection}
            img={PlaneShadow}
            offset={{
              x: -shadowDisplacement,
              y: shadowDisplacement,
            }}
            state={state}
          />
          <Animation
            movementSpeed={movementSpeed}
            position={position}
            scrollDirection={scrollDirection}
            img={PlaneImage}
            state={state}
          />
        </div>
      </div>
    </>
  );
};

export default Plane;
