import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Banner = () => {
  return (
    <div className="bg-white text-slate-800 w-full fixed top-0 z-40 p-4 lg:p-8 flex flex-col gap-2">
      <div className="flex flex-col lg:flex-row justify-between">
        <h1 className="text-xl lg:text-2xl font-bold uppercase">
          Kito Clark - Fullstack developer
        </h1>

        <div className="flex gap-3">
          <a href="https://github.com/KitoC" target="_blank">
            <FontAwesomeIcon size="2xl" icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/kito-clark" target="_blank">
            <FontAwesomeIcon size="2xl" icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
