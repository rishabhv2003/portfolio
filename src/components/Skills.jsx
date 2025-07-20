import SectionTitle from "./SectionTitle";
import Tilt from "react-parallax-tilt";
import {
	SiPython,
	SiJavascript,
	SiCplusplus,
	SiReact,
	SiTailwindcss,
	SiPostgresql,
	SiAmazonaws,
	SiLinux,
	SiMongodb,
	SiNodedotjs,
    SiExpress
} from "react-icons/si";

const skills = [
	{ name: "Python", icon: <SiPython className="text-yellow-400" /> },
	{ name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
	{ name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
	{ name: "React", icon: <SiReact className="text-cyan-400" /> },
	{ name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
	{ name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
	{ name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
	{ name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
	{ name: "AWS", icon: <SiAmazonaws className="text-orange-400" /> },
	{ name: "Linux", icon: <SiLinux className="text-gray-500" /> },
];

function Skills() {
	return (
		<div className="py-12">
			<SectionTitle >
                Skills
            </SectionTitle>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center">
				{skills.map((skill) => (
					<Tilt
						key={skill.name}
						tiltMaxAngleX={15}
						tiltMaxAngleY={15}
						className="w-24 h-24 bg-white dark:bg-slate-800 rounded-xl flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all duration-300"
					>
						<div className="text-4xl mb-1">{skill.icon}</div>
						<div className="text-sm text-gray-600 dark:text-gray-300">{skill.name}</div>
					</Tilt>
				))}
			</div>
		</div>
	);
}

export default Skills;
