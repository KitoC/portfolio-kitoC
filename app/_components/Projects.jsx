import SkillPill from "./SkillPill";
import Island from "./Island";
import ProjectStatus, { STATUS } from "./ProjectStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

const projects = [
  {
    name: "Mockend",
    githubLink: "https://github.com/KitoC/mockend-server-2.0",
    description:
      "A backend as a service for rapidly generating database models with REST and GraphQL endpoints.",
    skills: ["Typescript", "Node.JS", "SQL", "Postgres", "REST", "GraphQL"],
    status: STATUS.ABANDONED,
  },
  {
    name: "Mockend",
    githubLink: "https://github.com/KitoC/mockend-server-2.0",
    description:
      "A backend as a service for rapidly generating database models with REST and GraphQL endpoints.",
    skills: ["Typescript", "Node.JS", "SQL", "Postgres", "REST", "GraphQL"],
    status: STATUS.LIVE,
  },
  {
    name: "Mockend",
    githubLink: "https://github.com/KitoC/mockend-server-2.0",
    description:
      "A backend as a service for rapidly generating database models with REST and GraphQL endpoints.",
    skills: ["Typescript", "Node.JS", "SQL", "Postgres", "REST", "GraphQL"],
    status: STATUS.IN_PROGRESS,
  },
];

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
      {projects.map((project, index) => (
        <>
          <div className="px-24"></div>
          <Island key={project.name} flip={index % 2}>
            <div className="flex flex-col gap-10 text-white">
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold">{project.name}</h2>

                {project.githubLink && (
                  <a className="mt-4" href={project.githubLink} target="_blank">
                    {project.githubLink}
                    <FontAwesomeIcon
                      className="ml-2"
                      icon={faArrowUpRightFromSquare}
                    />
                  </a>
                )}
              </div>

              {project.description}
              <div className="flex gap-2 flex-wrap">
                {project.skills.map((skill) => (
                  <SkillPill key={skill} skill={skill}></SkillPill>
                ))}
              </div>

              <div className="absolute right-0 top-0 p-8">
                <ProjectStatus status={project.status} />
              </div>
            </div>
          </Island>
        </>
      ))}
    </>
  );
};

export default Projects;
