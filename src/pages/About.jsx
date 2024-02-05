

import { FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaDatabase } from 'react-icons/fa';
import { SiExpress,SiReactrouter } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { SiJsonwebtokens } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiVite } from "react-icons/si";


const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-600 mb-8">
          Hi, I'm Prashant Kumar Maurya, a passionate full-stack developer currently based in Gorakhpur, U.P, India.
          I have expertise in a variety of technologies including HTML, CSS, JavaScript, React, React Router,
          Redux Toolkit, Node.js, Express.js, MongoDB, and Vite module bundler. Currently, I am exploring Next.js to
          further enhance my skills.
        </p>

        <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
        <div className="flex justify-center space-x-4">
          <FaHtml5 className="w-20 h-20 font-bold text-4xl text-orange-500" />
          <FaCss3 className=" w-20 h-20 font-bold text-4xl text-blue-500" />
          <FaJs className=" w-20 h-20 font-bold text-4xl text-yellow-500" />
          <FaReact className=" w-20 h-20 font-bold text-4xl text-blue-400" />
          <FaNode className=" w-20 h-20 font-bold text-4xl text-green-500" />
          <FaDatabase className=" w-20 h-20 font-bold text-4xl text-green-700" />
          <SiExpress className='w-20 h-20 font-bold text-yellow-300'/>
          <SiReactrouter className='w-20 h-20 font-bold text-orange-600'/>
          <TbBrandRedux className='w-20 h-20 font-bold text-blue-800'/>
          <SiJsonwebtokens className='w-20 h-20 font-bold text-blue-300'/>
          <SiTailwindcss className='w-20 h-20 font-bold text-sky-500'/>
          <SiVite className='w-20 h-20 font-bold text-pink-500'/>
          
        </div>
      </div>
    </section>
  );
};

export default About;

