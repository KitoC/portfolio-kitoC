import Island from "./Island";

const jobs = [
  {
    name: "Bridj",
  },
  {
    name: "QLD Gov",
  },
  {
    name: "NextPractice",
  },
  {
    name: "SandboxAQ",
  },
  {
    name: "Simplero",
  },
];

const Experience = () => {
  return (
    <>
      <div className="px-24">
        <h1 className="text-3xl">EXPERIENCE</h1>
      </div>
      {jobs.map((job, index) => (
        <Island key={job.name} flip={index % 2}>
          <p>{job.name}</p>
        </Island>
      ))}
    </>
  );
};

export default Experience;
