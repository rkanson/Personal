import React from 'react';

class ResumeButton extends React.Component {
	toggleResume() {
		document.getElementById('resume').classList.toggle('offcanvas');
	}

	render() {
		return (
			<>
				<button
					className="bg-white text-grey-800 mx-1 py-2 px-4 rounded-t font-bold hover:bg-gray-600 hover:text-white"
					onClick={this.toggleResume}
				>
					Resume
				</button>
				<div
					id="resume"
					className="offcanvas transition fixed inset-x-0 bottom-0 rounded-t bg-white mx-4"
				>
					<div className="relative p-4 md:p-8">
						<button
							className="absolute right-0 top-0 mr-4 mt-4 text-2xl font-bold leading-mini hover:cursor-pointer hover:text-gray-600"
							onClick={this.toggleResume}
						>
							&times;
						</button>

						<p className="text-2xl font-bold leading-none">
							Experience
						</p>
						<ul className="mt-2 ml-2 mb-8">
							<li className="text-sm text-gray-600">
								NextLevel Web Strategies - Cherry Hill, NJ
							</li>
							<li className="text-sm text-gray-600">
								Lead Web Developer, Content Import Specialist
							</li>
						</ul>

						<p className="text-2xl font-bold leading-none">
							Education
						</p>
						<ul className="mt-2 ml-2">
							<li className="text-sm text-gray-600">
								Monmouth University - West Long Branch
							</li>
							<li className="text-sm text-gray-600">
								B.S in Computer Science w/ Concentration in
								Applied Programming
							</li>
						</ul>
					</div>
				</div>
			</>
		);
	}
}

export default ResumeButton;
