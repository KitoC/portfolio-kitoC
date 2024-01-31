const About = () => {
  const headingClassname = "font-semibold text-lg mb-2 mt-4 first:mt-0";
  const linkClassName = "underline font-semibold";

  return (
    <div>
      <h3 className={headingClassname}>My story</h3>
      <p>
        I started my coding journey in 2018 by attending a{" "}
        <a
          className={linkClassName}
          href="https://info.coderacademy.edu.au/full-stack-web-development"
        >
          coding bootcamp
        </a>{" "}
        and discovered a hidden passion (and at times unhealthy addiction) from
        the first line of code I wrote. This journey has provided me with the
        skills and privelage of building software in a range of companies and
        industries including{" "}
        <a className={linkClassName} href="bridj.com">
          public transport
        </a>{" "}
        ,{" "}
        <a className={linkClassName} href="nextpracticehealth.com.au">
          health care
        </a>{" "}
        ,{" "}
        <a className={linkClassName} href="sandboxaq.com">
          cyber security
        </a>{" "}
        and{" "}
        <a className={linkClassName} href="sandboxaq.com">
          online marketing and course creation.
        </a>{" "}
      </p>

      <h3 className={headingClassname}>My ethos</h3>
      <p>
        I enjoy blending creativity with logic in my quest to solve real world
        problems in the cyber universe. I am a firm believer in fostering a
        collaborative environment, where knowledge sharing and mutual growth are
        key to enhancing the efficiency and performance of the teams I work
        with.
        <br />
      </p>
      <h3 className={headingClassname}>My interests</h3>
      <p>
        In my personal time I enjoy travel, surfing and Muay Thai. I also have a
        newfound passion for woodworking, and in specific building wooden
        surfboards.
      </p>
    </div>
  );
};

export default About;
