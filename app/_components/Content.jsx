"use client";

import About from "./About";
import Experience from "./Experience";
import Island from "./Island";
import Plane from "./Plane";
import AnimatedCloudSection from "./AnimatedCloudSection";
import { useState, useEffect } from "react";
import clsx from "clsx";

const Content = () => {
  const [isLanded, setIsLanded] = useState(true);
  const [initialCoords, setIniticalCoords] = useState();

  const onJourneyClick = () => {
    const element = document.getElementById("About");
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const airStrip = document.getElementById("airstrip-1");
    const { left, top } = airStrip.getBoundingClientRect();

    setIniticalCoords([left - 20, top]);
  }, []);

  const spacer = <div className="h-screen" />;

  return (
    <div
      id="content-container"
      className="h-screen w-full relative overflow-hidden"
    >
      <div
        className={clsx(
          "h-screen w-full absolute bg-white flex items-center justify-center text-black z-40 transition-all duration-[3000ms] pointer-events-none",
          { "opacity-0": initialCoords }
        )}
      >
        <h1>Loading...</h1>
      </div>
      <div
        id="scroll-container"
        className={clsx(
          `h-screen w-full overflow-scroll no-scrollbar relative`,
          {}
        )}
      >
        {initialCoords && (
          <Plane
            isLanded={isLanded}
            setIsLanded={setIsLanded}
            initialCoords={initialCoords}
          />
        )}

        <Island>
          <div
            id="airstrip-1"
            className="bg-gray-600 p-4 min-w-[60px] rounded flex text-black"
          />
          <div>
            <About />
            <br></br>
            <button onClick={onJourneyClick}>
              Click the plane to take off and start scrolling the skies with me!
            </button>
          </div>
        </Island>
        <AnimatedCloudSection />

        <Island>
          <p>Skills</p>
        </Island>

        <AnimatedCloudSection />

        <Experience />

        <AnimatedCloudSection />
        <AnimatedCloudSection>
          <div id="Projects">Projects</div>{" "}
        </AnimatedCloudSection>

        <AnimatedCloudSection />
      </div>
    </div>
  );
};

export default Content;
