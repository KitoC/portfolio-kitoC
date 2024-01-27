import { useState } from "react";
import AnimatedCloudSection from "./AnimatedCloudSection";
import { sample } from "lodash";

const Island = ({ children, islandPosition = "left", flip }) => {
  const [drift] = useState(sample([0, 40, 50, 100]));
  return (
    <AnimatedCloudSection hasIsland islandPosition={islandPosition} flip={flip}>
      <div
        className={`bg-[#f6d896] p-4 pt-0 rounded-[40px] shadow-lg island relative`}
        style={{ [flip ? "right" : "left"]: `${drift}px` }}
      >
        <div className="bg-[#61a53f] p-8 rounded-[40px] flex gap-8">
          {children}
        </div>
      </div>
    </AnimatedCloudSection>
  );
};

export default Island;
