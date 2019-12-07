import "../main.css";
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
      <section className="flex flex-col justify-center items-center w-screen h-screen bg-gray-800">
        <SVGLogo />
        <div className="my-6 flex flex-col items-center text-center">
          <h1 className="font-bold leading-none text-4xl md:text-5xl text-white">
            Richard Kanson
          </h1>
          <h2 className="font-bold leading-none text-3xl text-white">
            Web Developer
          </h2>
        </div>
        <ExternalLinks />
        <a
          className="bg-white text-grey-800 mx-1 py-2 px-4 mt-8 rounded font-bold hover:bg-gray-600 hover:text-white transition"
          href="https://www.weddingwire.us/website/richard-kanson-and-erika-longfield"
          rel="noreferrer noopener"
        >
          Looking for the Wedding page?
        </a>
      </section>
      <FunctionButtons />
    </>
  );
}

export default Home;
