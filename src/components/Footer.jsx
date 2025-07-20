import React from "react";
import { FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="py-6 px-4 bg-slate-800 text-center text-gray-300 rounded-t-2xl shadow-inner border-t border-slate-700">
      <a
        href="#hero"
        className="inline-flex items-center gap-2 text-2xl font-bold tracking-wide hover:text-indigo-400 transition duration-300"
      >
        <FaArrowUp className="text-sm animate-bounce" />
        Rishabh Verma
      </a>

      <div className="mt-2">
        <a
          href="mailto:2000rishabhverma@gmail.com"
          className="inline-flex items-center gap-2 text-sm md:text-md text-gray-400 hover:text-indigo-400 transition duration-300"
        >
          <FaEnvelope />
          2000rishabhverma@gmail.com
        </a>
      </div>

      <p className="text-xs mt-4 text-gray-500">
        © {new Date().getFullYear()} Rishabh Verma. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
