import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaStripe,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiFramer,
  SiAxios,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import { FaCcStripe } from "react-icons/fa";



const skills = [
  { id: 1, name: "HTML", icon: <FaHtml5 /> },
  { id: 2, name: "CSS", icon: <FaCss3Alt /> },
  { id: 3, name: "JavaScript", icon: <FaJs /> },
  { id: 4, name: "React.js", icon: <FaReact /> },
  { id: 5, name: "Node.js", icon: <FaNodeJs /> },
  { id: 6, name: "Express.js", icon: <SiExpress /> },
  { id: 7, name: "MongoDB", icon: <SiMongodb /> },
  { id: 8, name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { id: 9, name: "Bootstrap", icon: <FaBootstrap /> },
  { id: 10, name: "Firebase", icon: <SiFirebase /> },
  { id: 11, name: "Framer Motion", icon: <SiFramer /> },
  { id: 12, name: "Axios", icon: <SiAxios /> },
  { id: 13, name: "Stripe", icon: <FaCcStripe /> },
  { id: 14, name: "TanStack Query", icon: <FaDatabase /> },
  { id: 15, name: "Git", icon: <FaGitAlt /> },
  { id: 16, name: "GitHub", icon: <FaGithub /> },
];

const SkillsSection = () => {
    return (
        <div>
            <section className="py-16 bg-[#0f0f1a] text-white" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-[#478CCF]">
          My Skills
        </h2>

        <div className="grid grid-cols-2 px-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="ml-6 border border-gray-700 rounded-2xl  p-6 flex flex-col items-center justify-center hover:border-[#77E4C8] transition-all duration-300"
            >
              <div className="text-4xl text-white mb-4">{skill.icon}</div>
              <p className="font-semibold text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
        </div>
    );
};

export default SkillsSection;