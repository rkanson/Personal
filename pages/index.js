import '../main.css';
import Head from 'next/head';

function Home() {
	return (
		<>
			<Head>
				<meta charset="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
				<title>Richard Kanson | Web Developer</title>
				<meta
					name="description"
					content="Richard Kanson is a web developer with experience in multiple tech stacks."
				/>
				<link
					rel="shortcut icon"
					href="favicon.ico"
					type="image/x-icon"
				/>
			</Head>
			<section className="flex flex-col justify-center items-center w-screen h-screen bg-gray-800">
				<svg
					width="169"
					height="105"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M134.531 103.465l.281.535h32.235l-.98-1.538-20.447-32.07c5.552-3.115 9.842-7.347 12.844-12.694l.003-.007c3.168-5.742 4.733-12.49 4.733-20.211 0-11.471-3.787-20.462-11.444-26.829-7.536-6.443-18.118-9.595-31.604-9.595H73.715v42.092L37.6 1.402l-.299-.346H4.07l1.502 1.669 36.92 41.037L3.18 102.443 2.138 104h33.94l.297-.44 25.78-38.108 11.56 12.875V104h28.429V76.064h17.98l14.407 27.401zM120.296 53.04h-18.152V24.08h18.152c5.216 0 9.065 1.303 11.702 3.763l.012.012.013.011c2.707 2.358 4.121 5.796 4.121 10.478 0 4.886-1.422 8.472-4.134 10.922l-.006.005-.006.006c-2.637 2.46-6.486 3.763-11.702 3.763z"
						stroke="#fff"
						strokeWidth="2"
					/>
				</svg>
				<div className="my-6 flex flex-col items-center text-center">
					<h1 className="font-bold leading-none text-5xl text-white">
						Richard Kanson
					</h1>
					<h2 className="font-bold leading-none text-3xl text-white">
						Web Developer
					</h2>
				</div>
				<div className="flex items-center">
					<a
						href="https://github.com/rkanson"
						target="_blank"
						rel="noopener"
						aria-label="GitHub"
					>
						<svg
							className="text-white fill-current hover:text-gray-700"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
						</svg>
					</a>
				</div>
			</section>
			<section className="fixed inset-x-0 bottom-0 flex items-center justify-center">
				<button
					id="resume"
					className="bg-white text-grey-800 mx-1 py-2 px-4 rounded-t"
				>
					Resume
				</button>
				<button
					id="portfolio"
					className="bg-white text-grey-800 mx-1 py-2 px-4 rounded-t"
				>
					Portfolio
				</button>
			</section>
		</>
	);
}

export default Home;
