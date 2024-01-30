import { random } from "lodash";
import { useState } from "react";

const SkillPill = ({ skill }) => {
  const [height, setHeight] = useState(1);
  const [marginLeft, setMarginLeft] = useState(1);
  const [wallColor, setWallColor] = useState("#f28f5a");

  useState(() => {
    setHeight(random(10, 16));
    setMarginLeft(random(0, 15));
  }, []);

  return (
    <div className={`flex flex-col h-fit relative z-0`} style={{ marginLeft }}>
      <div className="border-slate-300 border-2  z-10 rounded">
        <p className="bg-slate-500 border-slate-600 border-2 border-l-slate-400 border-b-0 px-3 py-1 w-fit text-white rounded">
          {skill}
        </p>
      </div>

      <div
        className="absolute w-full h-full rounded z-0"
        style={{
          top: `${(height + 8) * 1.5}px`,
          left: "-8px",
          width: "calc(100% + 5px)",
          height: `calc(100% - ${height + 8}px)`,
          backgroundColor: "rgba(0,0,0,0.2)",
          transform: "skew(-15deg)",
        }}
      ></div>
      <div
        className="border-yellow-700 border-2 rounded relative z-0"
        style={{
          height: `${height + 4}px`,
          backgroundColor: wallColor,
          top: "-4px",
        }}
      ></div>
    </div>
  );
};

export default SkillPill;
