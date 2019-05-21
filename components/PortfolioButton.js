import React from 'react';

class PortfolioButton extends React.Component {
	togglePortfolio() {
		document.getElementById('portfolio').classList.toggle('offcanvas');
	}

	render() {
		return (
			<>
				<button
					className="bg-white text-grey-800 mx-1 py-2 px-4 rounded-t font-bold hover:bg-gray-600 hover:text-white"
					onClick={this.togglePortfolio}
				>
					Portfolio
				</button>
				<div
					id="portfolio"
					className="offcanvas transition fixed inset-x-0 bottom-0 rounded-t bg-white mx-4"
				>
					<div className="relative p-4 md:p-8">
						<button
							className="absolute right-0 top-0 mr-4 mt-4 text-2xl font-bold leading-mini hover:cursor-pointer hover:text-gray-600"
							onClick={this.togglePortfolio}
						>
							&times;
						</button>

						<p className="text-2xl font-bold leading-none">
							Languages
						</p>
						<ul className="mt-2 ml-2">
							<li className="text-sm text-gray-600">HTML</li>
							<li className="text-sm text-gray-600">
								CSS (SCSS)
							</li>
							<li className="text-sm text-gray-600">
								JS (Vanilla, Vue, React, jQuery)
							</li>
							<li className="text-sm text-gray-600">
								Python (Flask)
							</li>
							<li className="text-sm text-gray-600">
								PHP (Laravel)
							</li>
						</ul>
					</div>
				</div>
			</>
		);
	}
}

export default PortfolioButton;
