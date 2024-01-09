import React from 'react';
import myImg from '../images/hero.jpg';
import SectionTitle from './SectionTitle';
import { FaLinkedin, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { HiDocumentDownload } from "react-icons/hi";
function About() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
			<div className="w-full md:w-6/12">
				<SectionTitle>About Me</SectionTitle>
				<div className='about-para mb-3'>
					<p className="text-md text-gray-600 dark:text-gray-300">
						I'm a college student deeply passionate about web and software development. With an insatiable curiosity for creating digital solutions, I thrive on coding challenges and embrace new technologies. As a lifelong learner, I'm eager to contribute my skills to the tech world. 🌐💻🚀
					</p>
				</div>
				<div className='about-icons flex flex-row justify-between align-middle'>
					{/* <div>
						<a title="LinkedIn" href="https://www.linkedin.com/in/rishabh-verma-2148741ba/" className='inline-block text-gray-700 mr-2 hover:text-indigo-500 dark:text-white'>
							<FaLinkedin className='w-9 h-9 transform hover:scale-125 transition-transform duration-300 ease-in-out' />
						</a>
						<a title="Twitter" href="https://twitter.com/vrishabh__" className='inline-block text-gray-700 mr-2 hover:text-indigo-500 dark:text-white'>
							<FaTwitterSquare className='w-9 h-9 transform hover:scale-125 transition-transform duration-300 ease-in-out' />
						</a>
						<a href="https://www.linkedin.com/in/rishabh-verma-2148741ba/" className='inline-block text-gray-700 mr-2 hover:text-indigo-500 dark:text-white'>
						<FaFacebookSquare className='w-8 h-8 transform hover:scale-125 transition-transform duration-300 ease-in-out' />
					</a>
					</div> */}
					<div className='flex gap-4'>
						<button class="inline-block px-6 py-1 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md ">
							Resume
						</button>
						<button class="inline-block px-6 py-1 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md ">
							Contact
						</button>
					</div>
				</div>
			</div>

			<img
				src={myImg}
				alt="Rishabh"
				className="w-full md:w-6/12 rounded-lg object-cover"
			/>
		</div>
	);
}

export default About;
