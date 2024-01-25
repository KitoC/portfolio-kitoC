import About from "./About";
import AirShip from "./Island";
import AnimatedPlane from "./AnimatedPlane";

const Content = () => {
  return (
    <div className="h-full py-24 lg:w-1/2 lg:py-24">
      <div
        id="content-container"
        className="w-full relative overflow-visible h-full"
      >
        <AnimatedPlane />
        <div className="flex  flex-col  grow justify-center items-center">
          <div id="About">
            <AirShip>
              <About />
            </AirShip>
          </div>
          <div id="Skills">Skills</div>
          <div id="Experience">Experience</div>
          <div id="Projects">Projects</div>
        </div>
      </div>
    </div>
  );
};

export default Content;
