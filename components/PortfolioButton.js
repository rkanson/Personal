import { useState, useEffect } from 'react';

function PortfolioButton() {
	const dispNone = {
		display: 'none',
	};

	const [languages] = useState([
		'HTML',
		'CSS (SCSS)',
		'JS (Vanilla, Vue, React, jQuery)',
		'Python (Flask)',
		'PHP (Laravel)',
	]);

	function togglePortfolio() {
		document.querySelector('#portfolio').classList.toggle('offcanvas');
	}

	useEffect(() => {
		document.querySelector('#portfolio').removeAttribute('style');
	});

	return (
		<>
			<button
				className="bg-white text-grey-800 mx-1 py-2 px-4 rounded-t font-bold hover:bg-gray-600 hover:text-white"
				onClick={togglePortfolio}
			>
				Portfolio
			</button>
			<div
				id="portfolio"
				className="offcanvas transition fixed inset-x-0 bottom-0 rounded-t bg-white mx-4"
				style={dispNone}
			>
				<div className="relative p-4 md:p-8">
					<button
						className="absolute right-0 top-0 mr-4 mt-4 text-2xl font-bold leading-mini hover:cursor-pointer hover:text-gray-600"
						onClick={togglePortfolio}
					>
						&times;
					</button>
					<p className="text-2xl font-bold leading-none border-b-2 pb-2 mr-2">
						Languages
					</p>
					<ul className="mt-2 ml-2 list-disc ml-6">
						{languages.map((lang, index) => (
							<li className="text-sm text-gray-800" key={index}>
								{lang}
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}

export default PortfolioButton;
