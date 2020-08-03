import Head from "next/head";
import SVGLogo from "../components/SVGLogo";
import ExternalLinks from "../components/ExternalLinks";
import FunctionButtons from "../components/FunctionButtons";

function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Richard Kanson | Web Developer</title>
        <meta
          name="description"
          content="Richard Kanson is a web developer with experience in multiple tech stacks."
        />
        <link
          rel="shortcut icon"
          href="/static/img/favicon.ico"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/img/apple-touch-icon.png"
        />
      </Head>
      <section className="flex flex-col items-center justify-center w-screen h-screen bg-gray-800">
        <SVGLogo />
        <div className="flex flex-col items-center my-6 text-center">
          <h1 className="text-4xl font-bold leading-none text-white md:text-5xl">
            Richard Kanson
          </h1>
          <h2 className="text-3xl font-bold leading-none text-white">
            Web Developer
          </h2>
        </div>
        <ExternalLinks />
        {/* <a
          className="px-4 py-2 mx-1 mt-8 font-bold transition-all duration-300 bg-white rounded text-grey-800 hover:bg-gray-600 hover:text-white"
          href="https://www.weddingwire.us/website/richard-kanson-and-erika-longfield"
          rel="noreferrer noopener"
        >
          Looking for the Wedding page?
        </a> */}
      </section>
      {/* <FunctionButtons /> */}
    </>
  );
}

export default Home;
