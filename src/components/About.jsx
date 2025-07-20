import myImg from "../images/hero.jpg";
import SectionTitle from "./SectionTitle";

function About() {
  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/1aM8kFQRS9hTscyAoWHtYaVvl2pSGYFQn/view?usp=sharing",
      "_blank"
    );
  };

  const openContact = () => {
    window.location.href = "mailto:2000rishabhverma@gmail.com";
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
      <div className="w-full md:w-6/12">
        <SectionTitle>About Me</SectionTitle>
        <div className="mb-4">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm a Software Developer with experience in backend systems, algo
            trading strategies, and real-time data applications. I enjoy
            building efficient tools and scalable architectures, whether it's
            for financial systems, internal automation, or backend APIs.
            Passionate about continuous learning, I'm always exploring new
            technologies and ways to improve developer productivity.
          </p>
        </div>

        <div className="flex gap-4 mt-4">
          <button
            onClick={openResume}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-medium transition"
          >
            Resume
          </button>
          <button
            onClick={openContact}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-md bg-gray-700 hover:bg-gray-800 text-white text-lg font-medium transition"
          >
            Contact
          </button>
        </div>
      </div>

      <img
        src={myImg}
        alt="Rishabh Verma"
        className="w-full md:w-6/12 rounded-lg object-cover shadow-lg"
      />
    </div>
  );
}

export default About;
