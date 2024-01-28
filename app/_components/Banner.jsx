import SkillPill from "./SkillPill";

const Banner = () => {
  return (
    <div className="bg-white text-slate-800 w-full fixed bottom-0 z-40 p-4 flex flex-col gap-2">
      <h1 className="text-xl font-bold uppercase">
        Kito Clark - Fullstack developer
      </h1>
      <div>
        <div className="flex gap-2 flex-wrap">
          <SkillPill skill="React" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
