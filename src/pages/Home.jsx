import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Home() {
  return (
    <div className=" bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="title transition-all ease-in-out duration-500  text-6xl font-bold mb-4 font-sans-serif">
          Prashant Kumar Maurya
        </h1>

        <p className="animate-spin transition-all ease-in-out duration-500 delay-300"></p>
        <p className="text-gray-600 mb-8 font-sans-serif">Full Stack Developer</p>
        <p className="text-lg mb-8 font-system-ui">
          Hi, I'm Prashant Kumar Maurya, a full stack developer based in
          Gorakhpur, U.P, India.
        </p>
        <div className="flex justify-center gap-6 ">
          <a
            className="hover:scale-150"
            href="https://github.com/PrashantMaurya252"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-14 h-14" />
          </a>
          <a
            className="hover:scale-150"
            href="https://www.linkedin.com/in/prashant-maurya-a68856242/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-14 h-14 text-blue-600" />
          </a>
          <a
            className="hover:scale-150"
            href="mailto:mauryaprashant202@gmail.com"
          >
            <SiGmail className="w-14 h-14 text-red-500" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
