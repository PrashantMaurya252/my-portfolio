import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,
  FaDatabase,
} from "react-icons/fa";
import { SiExpress, SiReactrouter } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { SiJsonwebtokens } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiVite } from "react-icons/si";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl text-slate-600  font-bold m-3 p-3 font-sans-serif">About Me</h2>
        <p className="text-gray-600 mb-8 font-system-ui">
          Hi, I'm Prashant Kumar Maurya, a passionate full-stack developer
          currently based in Gorakhpur, U.P, India. I have expertise in a
          variety of technologies including <span className="text-slate-400 font-bold">
          HTML, CSS, JavaScript, React, React
          Router, Redux Toolkit, Node.js, Express.js, MongoDB,Restful APIs and Vite module
          bundler</span>. Currently, I am exploring <span>Next.js</span> to further enhance my
          skills.
        </p>

        <h3 className="text-2xl font-bold mb-4 font-sans-serif">Tech Stack</h3>
        <div className="flex  flex-wrap mx-auto w-4/5 items-center justify-center space-x-4">
          <div className="border-teal-600 border-2 p-5 rounded-md bg-slate-100 m-3 hover:scale-110">
            <FaHtml5 className="w-20 h-20 font-bold text-4xl text-orange-500" />
          </div>
          <div className="border-teal-600 border-2 p-5 rounded-md bg-slate-100 m-3 hover:scale-110">
          <SiTailwindcss className="w-20 h-20 font-bold text-sky-500" />
          </div>
          <div className="border-teal-600 border-2 p-5 rounded-md bg-slate-100 m-3 hover:scale-110">
          <SiJsonwebtokens className="w-20 h-20 font-bold text-blue-300" />
          </div>
          <div className="border-teal-600 border-2 p-5 rounded-md bg-slate-100 m-3 hover:scale-110">
          <TbBrandRedux className="w-20 h-20 font-bold text-blue-800" />
          </div>
          <div className="border-teal-600 border-2 p-5 rounded-md bg-slate-100 m-3 hover:scale-110">
          <SiReactrouter className="w-20 h-20 font-bold text-orange-600" />
          </div>
          <div className="border-teal-600 border-2 p-5 rounded-md bg-slate-100 m-3 hover:scale-110">
          <SiVite className="w-20 h-20 font-bold text-pink-500" />
          </div>
          <div className="border-teal-600 border-2 p-5 rounded-md bg-slate-100 m-3 hover:scale-110">
          <SiExpress className="w-20 h-20 font-bold text-yellow-300" />
          </div>
          <div className="border-teal-600 border-2 p-5 rounded-md bg-slate-100 m-3 hover:scale-110">
          <FaDatabase className=" w-20 h-20 font-bold text-4xl text-green-700" />
          </div>
          <div className="border-teal-600 border-2 p-5 rounded-md bg-slate-100 m-3 hover:scale-110">
          <FaNode className=" w-20 h-20 font-bold text-4xl text-green-500" />
          </div>
          <div className="border-teal-600 border-2 p-5 rounded-md bg-slate-100 m-3 hover:scale-110">
          <FaReact className=" w-20 h-20 font-bold text-4xl text-blue-400" />
          </div>
          <div className="border-teal-600 border-2 p-5 rounded-md bg-slate-100 m-3 hover:scale-110">
          <FaJs className=" w-20 h-20 font-bold text-4xl text-yellow-500" />
          </div>
          
          <div className="border-teal-600 border-2 p-5 rounded-md bg-slate-100 m-3 hover:scale-110"><FaCss3 className=" w-20 h-20 font-bold text-4xl text-blue-500" /></div>
          
          
          
          
          
          
          
          
          
          
        </div>
      </div>
    </section>
  );
};

export default About;
