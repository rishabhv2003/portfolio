import React from 'react';

function Footer() {
	return (
		<div className="py-5 bg-slate-800 text-center text-gray-300 rounded-t-lg">
			<a href="#hero" className="block text-xl md:text-2xl font-semibold">
				Rishabh Verma
			</a>
			<a
				href="mailto:2000rishabhverma@gmail.com"
				className="text-sm md:text-md hover:text-indigo-500"
			>
				2000rishabhverma@gmail.com
			</a>
			<p className="text-xs mt-2 text-gray-500">
				{new Date().getFullYear()}.
			</p>
		</div>
	);
}

export default Footer;
