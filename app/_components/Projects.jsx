import SkillPill from "./SkillPill";
import Island from "./Island";

const projects = [];

const Projects = () => {
  return (
    <>
      <div className="px-24">
        <h1 className="text-3xl">PROJECTS</h1>
      </div>

      <Island>
        <div className="flex flex-col gap-10 text-white">
          <p>
            In my spare time I like to tinker with things. Whether these
            tinkerings actually get completed or go anywhere is another matter.
            Life can have a tendency to get in the way! Either way, with all of
            these side projects I have always learned new things or better ways
            of doing things.
            <br />
            <br />
            Most of these projects are tech based, however there might be some
            here that aren&apos;t because they are just cool and fun!
          </p>
        </div>
      </Island>
      {projects.map((job, index) => (
        <>
          <div className="px-24"></div>
          <Island key={job.name} flip={index % 2}>
            <div className="flex flex-col gap-10 text-white">
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold">
                  {job.name} - {job.dates}
                </h2>
                <h3>{job.type}</h3>
                <h3>{job.location}</h3>
              </div>

              {job.description}
              <div className="flex gap-2 flex-wrap">
                {job.skills.map((skill) => (
                  <SkillPill key={skill} skill={skill}></SkillPill>
                ))}
              </div>
            </div>
          </Island>
        </>
      ))}
    </>
  );
};

export default Projects;
