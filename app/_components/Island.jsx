import AnimatedCloudSection from "./AnimatedCloudSection";

const Island = ({ children, islandPosition = "left" }) => {
  return (
    <AnimatedCloudSection hasIsland islandPosition={islandPosition}>
      <div className="bg-[#f6d896] p-4 pt-0 rounded-lg shadow-lg island">
        <div className="bg-[#61a53f] p-8 rounded flex gap-8">{children}</div>
      </div>
    </AnimatedCloudSection>
  );
};

export default Island;
