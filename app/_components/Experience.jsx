import SkillPill from "./SkillPill";
import Island from "./Island";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import LINKS from "../_constants/links";
const jobs = [
  {
    name: "Bridj",
    location: "Brisbane, Australia",
    dates: "01/2019 - 03/2021",
    type: "Full-time",
    link: LINKS.BRIDJ,
    description: (
      <>
        <p>
          Bridj is a SAAS for public transport. Our mission was to create a
          smarter transport system where operators could design hybrid bus
          routes. Operators can design services that would be fixed-route during
          peak hours and on-demand during off-peak.
        </p>
        <div>
          <h3 className="font-bold">Achievements:</h3>
          <ul className="list-disc pl-6">
            <li>
              Implemented interactive map interfaces with live vehicle tracking.
            </li>
            <li>Architected modular frontend.</li>
            <li>Deployed realtime messaging service.</li>
            <li>Improved build configurations with webpack.</li>
            <li>Built out component library with Storybook.</li>
            <li>Designed interfaces in Figma for proof of concept work.</li>
          </ul>
        </div>
      </>
    ),
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
    dates: "05/2021 - 08/2023",
    type: "Contract",
    description: (
      <>
        <p>
          We were contracted to build out the tell us once program. Our goal was
          to create a platform to improve cross department inter-operability.
        </p>
        <div>
          <h3 className="font-bold">Achievements:</h3>
          <ul className="list-disc pl-6">
            <li>
              Implemented web-components to embed components agnostic of
              framework.
            </li>
            <li>Implemented form custom form builder.</li>
            <li>Bug hunting and fixing.</li>
          </ul>
        </div>
      </>
    ),
    skills: ["Javascript", "React", "Node.js", "Webpack", "Web Components"],
  },
  {
    name: "NextPractice",
    location: "Remote, Australia/Mexico",
    dates: "09/2021 - 10/2022",
    type: "Full-time",
    link: LINKS.NEXT_PRACTICE,
    description: (
      <>
        <p>
          NextPractice is a franchise model for GP clinics that provide an in
          house EHR solution. The mission was to provide the best medical clinic
          experience on the planet.
        </p>
        <div>
          <h3 className="font-bold">Achievements:</h3>
          <ul className="list-disc pl-6">
            <li>
              Created a suite of headless react components to implement into a
              3rd party EHR platform.
            </li>
            <li>Strategised backend APIs.</li>
            <li>Integrated with third party APIs for Medicare and Tyro.</li>
            <li>
              Brainstormed and implemented user experiences for smart billing
              and batching interfaces.
            </li>
            <li>Optimized webpack configurations.</li>
            <li>Designed database schemas.</li>
          </ul>
        </div>
      </>
    ),
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
    location: "Remote, Mexico/Brazil",
    dates: "10/2022 - 03/2023",
    type: "Contract",
    link: LINKS.SANDBOX_AQ,
    description: (
      <>
        <p>
          SandboxAQ is at the forefront of quantum cyber security. Leveraging
          the compoun effects of AI and Quantum technologies to solve hard
          challenges impacting society.
        </p>
        <div>
          <h3 className="font-bold">Achievements:</h3>
          <ul className="list-disc pl-6">
            <li>
              Implemented unique approach for a legacy rewrite with
              webcomponents.
            </li>
            <li>
              Rebuilt legacy pages and components with modern design and react.
            </li>
            <li>Developed a powerful table search and filtering UI.</li>
          </ul>
        </div>
      </>
    ),
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
    location: "Remote, Brazil/Australia",
    dates: "03/2023 - 09/2023",
    type: "Contract",
    link: LINKS.SIMPLERO,
    description: (
      <>
        <p>
          Simplero is a CRM for online business owners. It&apos;s mission was
          simply simplifying the day to day management of online businesses for
          coaches, consultants, course creators, and service businesses.
        </p>
        <div>
          <h3 className="font-bold">Achievements:</h3>
          <ul className="list-disc pl-6">
            <li>Migrated legacy codebase into modernised React.</li>
            <li>Rebuilt in browser site and landing page editor.</li>
            <li>Developed new site builder sections with Liquid.</li>
            <li>Developed new features in Ruby on Rails.</li>
            <li>Bug hunting and fixes.</li>
          </ul>
        </div>
      </>
    ),
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
  {
    name: "Capability Psychology",
    location: "Remote, Australia",
    dates: "10/2023 - 12/2023",
    type: "Freelancing",
    link: LINKS.CAPABILITY_PSYCHOLOGY,
    description: (
      <>
        <p>
          Freelancing work for a friend. They wanted a fresh new look for their
          site and to extend some capabilities.
        </p>
      </>
    ),
    skills: ["React", "Typescript", "Gatsby", "GraphQL", "Contentful"],
  },
];

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
            <div className="flex flex-col gap-10 text-white">
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold">
                  {job.name} - {job.dates}
                </h2>
                <h3>{job.type}</h3>
                <h3>{job.location}</h3>
                {job.link && (
                  <a className="mt-4 underline" href={job.link} target="_blank">
                    {job.link}
                    <FontAwesomeIcon
                      className="ml-2"
                      icon={faArrowUpRightFromSquare}
                    />
                  </a>
                )}
              </div>

              {job.description}
              <div className="flex items-end gap-2 flex-wrap">
                {job.skills.map((skill) => (
                  <SkillPill key={skill} skill={skill}></SkillPill>
                ))}
              </div>
            </div>
          </Island>
        </div>
      ))}
    </>
  );
};

export default Experience;
