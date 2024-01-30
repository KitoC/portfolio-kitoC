"use client";
import AnimatedCloudSection from "./AnimatedCloudSection";

const Island = ({ children, islandPosition = "left", flip }) => {
  return (
    <AnimatedCloudSection hasIsland islandPosition={islandPosition} flip={flip}>
      <div
        className={`bg-[rgba(255,255,255,0.1)] p-4 lg:p-6 pt-2 rounded-[40px] island lg:relative`}
      >
        <div className={`bg-[#f6d896] p-4 pt-1 rounded-[40px] island relative`}>
          <div className="bg-[#61a53f] p-5 lg:p-8 rounded-[40px] flex gap-4 lg:gap-8 relative">
            {children}
          </div>
        </div>
      </div>
    </AnimatedCloudSection>
  );
};

export default Island;
