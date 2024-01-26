"use client";

import About from "./About";
import Island from "./Island";
import Plane from "./Plane";
import AnimatedCloudSection from "./AnimatedCloudSection";

const Content = () => {
  const onJourneyClick = () => {
    const element = document.getElementById("About");
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const spacer = <div className="h-screen" />;

  return (
    <div
      id="content-container"
      className="h-screen w-full relative overflow-visible"
    >
      <div
        id="scroll-container"
        className="h-screen w-full overflow-auto no-scrollbar"
      >
        <AnimatedCloudSection>
          <Island>
            <div
              id="airstrip-1"
              className="bg-gray-600 p-4 min-w-[60px] rounded flex text-black"
            />
            <div>
              <About />

              <button onClick={onJourneyClick}>
                Come on a journey with me.
              </button>
            </div>
          </Island>
        </AnimatedCloudSection>
        <AnimatedCloudSection />

        <AnimatedCloudSection>
          <div id="Skills">Skills</div>
        </AnimatedCloudSection>

        <AnimatedCloudSection />
        <AnimatedCloudSection>
          <div id="Experience">Experience</div>
        </AnimatedCloudSection>

        <AnimatedCloudSection />
        <AnimatedCloudSection>
          <div id="Projects">Projects</div>{" "}
        </AnimatedCloudSection>

        <AnimatedCloudSection />
      </div>
      <Plane />
    </div>
  );
};

export default Content;
