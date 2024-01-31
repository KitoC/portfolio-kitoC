import SkillPill from "./SkillPill";
import Island from "./Island";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import LINKS from "../_constants/links";
import dayjs from "dayjs";

const jobs = [
  {
    name: "Bridj",
    location: "Brisbane, Australia",
    from: "01/01/2019",
    to: "01/03/2021",
    type: "Full-time",
    link: LINKS.BRIDJ,
    description: (
      <p>
        Bridj is a SAAS for public transport. Our mission was to create a
        smarter transport system where operators could design hybrid bus routes.
        Operators can design services that would be fixed-route during peak
        hours and on-demand during off-peak.
      </p>
    ),
    achievements: [
      "Implemented interactive map interfaces with live vehicle tracking.",
      "Architected modular frontend.",
      "Deployed realtime messaging service.",
      "Improved build configurations with webpack.",
      "Built out component library with Storybook.",
      "Designed interfaces in Figma for proof of concept work.",
    ],
    skills: [
      "Javascript",
      "React",
      "Vue",
      "Ruby on Rails",
      "Redux",
      "Python",
      "Node.js",
      "Webpack",
      "Google maps API",
      "Websockets",
      "Storybook",
      "Figma",
      "Postgres",
      "Sequelize",
      "REST",
    ],
  },
  {
    name: "QLD Gov",
    location: "Brisbane, Australia",
    from: "01/05/2021",
    to: "01/08/2023",
    type: "Contract",
    description: (
      <p>
        We were contracted to build out the tell us once program. Our goal was
        to create a platform to improve cross department inter-operability.
      </p>
    ),
    achievements: [
      "Implemented web-components to embed components agnostic of framework.",
      "Implemented form custom form builder.",
      "Bug hunting and fixing.",
    ],
    skills: ["Javascript", "React", "Node.js", "Webpack", "Web Components"],
  },
  {
    name: "NextPractice",
    location: "Remote",
    from: "01/09/2021",
    from: "01/10/2022",
    type: "Full-time",
    link: LINKS.NEXT_PRACTICE,
    description: (
      <p>
        NextPractice is a franchise model for GP clinics that provide an in
        house EHR solution. The mission was to provide the best medical clinic
        experience on the planet.
      </p>
    ),
    achievements: [
      "Created a suite of headless react components to implement into a 3rd party EHR platform.",
      "Strategised backend APIs.",
      "Integrated with third party APIs for Medicare and Tyro.",
      " Brainstormed and implemented user experiences for smart billing and batching interfaces.",
      "Optimized webpack configurations.",
      "Designed database schemas.",
    ],
    skills: [
      "React",
      "React-Query",
      "Node.js",
      "Webpack",
      "Headless Components",
      "MySQL",
      "Knex.JS",
      "Typescript",
      "Backbone.js",
      "Marionette",
      "GraphQL",
    ],
  },
  {
    name: "SandboxAQ",
    location: "Remote",
    from: "01/10/2022",
    to: "01/03/2023",
    type: "Contract",
    link: LINKS.SANDBOX_AQ,
    description: (
      <p>
        SandboxAQ is at the forefront of quantum cyber security. Leveraging the
        compoun effects of AI and Quantum technologies to solve hard challenges
        impacting society.
      </p>
    ),
    achievements: [
      "Implemented unique approach for a legacy rewrite with webcomponents.",
      "Rebuilt legacy pages and components with modern design and react.",
      "Developed a powerful table search and filtering UI.",
    ],
    skills: [
      "React",
      "Typescript",
      "PHP",
      "Web Components",
      "Webpack",
      "GraphQL",
    ],
  },
  {
    name: "Simplero",
    location: "Remote",
    from: "01/03/2023",
    to: "01/09/2023",
    type: "Contract",
    link: LINKS.SIMPLERO,
    description: (
      <p>
        Simplero is a CRM for online business owners. It&apos;s mission was
        simply simplifying the day to day management of online businesses for
        coaches, consultants, course creators, and service businesses.
      </p>
    ),
    achievements: [
      "Migrated legacy codebase into modernised React.",
      "Rebuilt in browser site and landing page editor.",
      "Developed new site builder sections with Liquid.",
      "Developed new features in Ruby on Rails.",
      "Bug hunting and fixes.",
    ],
    skills: [
      "React",
      "Typescript",
      "React-Relay",
      "GraphQL",
      "JQuery",
      "Ruby on Rails",
      "Liquid",
      "Stimulus",
      "ViewComponent",
    ],
  },
  // {
  //   name: "Capability Psychology",
  //   location: "Remote, Australia",
  //   dates: "10/2023 - 12/2023",
  //   type: "Freelancing",
  //   link: LINKS.CAPABILITY_PSYCHOLOGY,
  //   description: (
  //     <>
  //       <p>
  //         Freelancing work for a friend. They wanted a fresh new look for their
  //         site and to extend some capabilities.
  //       </p>
  //     </>
  //   ),
  //   skills: ["React", "Typescript", "Gatsby", "GraphQL", "Contentful"],
  // },
];

const formatFromAndTo = (from, to) => {
  const fromDate = dayjs(from);
  const toDate = dayjs(to);

  const format = "MMM YYYY";

  return `${fromDate.format(format)} to ${toDate.format(format)}`;
};
const Experience = () => {
  return (
    <>
      <div className="px-24">
        <h1 className="text-3xl">EXPERIENCE</h1>
      </div>
      {[...jobs].reverse().map((job, index) => (
        <div key={job.name}>
          <div className="px-24"></div>
          <Island key={job.name} flip={index % 2}>
            <div className="flex flex-col text-green-900">
              <div className="flex flex-col gap-2 mb-8">
                <div className="flex justify-between flex-wrap">
                  <h2 className="text-2xl font-bold">{job.name}</h2>
                  <p className="font-bold">
                    {formatFromAndTo(job.from, job.to)}
                  </p>
                </div>
                <div className="flex justify-between flex-wrap">
                  <h3>{job.location}</h3>
                  <h3>{job.type}</h3>
                </div>
              </div>

              <div className="mb-12">{job.description}</div>

              <div className="mb-12">
                <div>
                  <h3 className="font-bold">Achievements:</h3>
                  <ul className="list-disc pl-6">
                    {job.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-end gap-2 flex-wrap">
                {job.skills.map((skill) => (
                  <SkillPill key={skill} skill={skill}></SkillPill>
                ))}
              </div>

              <div className="flex justify-end">
                {job.link && (
                  <a className="mt-4 underline" href={job.link} target="_blank">
                    Link to company website
                    <FontAwesomeIcon
                      className="ml-2"
                      icon={faArrowUpRightFromSquare}
                    />
                  </a>
                )}
              </div>
            </div>
          </Island>
        </div>
      ))}
    </>
  );
};

export default Experience;
