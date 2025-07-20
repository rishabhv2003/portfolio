import SectionTitle from "./SectionTitle";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    role: "Software Developer",
    company: "CSV Trade Trail Pvt. Ltd.",
    location: "Soami Nagar, Delhi",
    duration: "May 2024 - Present",
    bullets: [
      "Developed parallelized financial backtesting tools using Dask and Multiprocessing, improving speed by 60%.",
      "Deployed 2 F&O and 2 Equity trading strategies with VWAP, IV pricing, delay and slicing logic; improved execution efficiency by 40%.",
      "Engineered a scalable backend using Python and FastAPI to handle 100+ trades/min, reducing manual handling by 30%.",
      "Automated AWS EC2 workflows using Lambda with monitoring, alerts, and compliance; ensured 99.9% uptime.",
      "Built a real-time market data broadcaster using Kite WebSockets for trading application.",
      "Developed a fault-tolerant data distribution server using Zerodha, XTS, and Google Sheets APIs.",
      "Built MTM, index-wise risk, and drawdown monitoring tools; reduced manual effort by 60%.",
    ],
  },
  {
    role: "Software Engineer Trainee",
    company: "Cadence Design Systems",
    location: "Noida, Uttar Pradesh",
    duration: "Apr 2023 - Aug 2023",
    bullets: [
      "Built a remote debugging utility for Tempus DSTA Tool using Boost libraries and Signals to trace distributed processes across systems; reduced debug time by 70%.",
      "Resolved 1000+ code warnings and potential bugs by applying advanced compiler flags and code analysis techniques.",
      "Improved core product functionality and user workflows through multiple feature enhancements.",
      "Designed and maintained regression test suites; authored 2 new ones and fixed 50+ failing cases.",
      "Automated internal tools and build validation workflows using Python to support development team.",
      "Utilized C, C++, Boost, Python, Tcl, Linux, Perforce (VCS).",
    ],
  },
];

function Experience() {
  return (
    <section className="py-16" id="experience">
      <SectionTitle>Experience</SectionTitle>
      <div className="relative border-l-4 border-indigo-500 dark:border-indigo-400 ml-4 md:ml-8 space-y-10 mt-10">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-10">
            {/* Icon marker */}
            <div className="absolute -left-6 top-1.5 w-10 h-10 flex items-center justify-center rounded-full bg-indigo-500 text-white shadow-md">
              <FaBriefcase size={18} />
            </div>

            {/* Experience content */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-[1.02]">
              <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                {exp.role}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                {exp.company} – {exp.location}
              </p>
              <p className="text-sm text-gray-500 mb-3">{exp.duration}</p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                {exp.bullets.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
