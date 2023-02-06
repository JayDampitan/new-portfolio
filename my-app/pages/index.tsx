import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Loader from "../components/Loader";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jay Dampitan</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Loader n={100} />

      <Navbar />
      <section id="/" className="relative">
        <Hero />
      </section>

      <section id="about" className="relative">
        <About />
      </section>

      <section id="work" className="">
        <Work />
      </section>

      <section id="contact" className="">
        <Contact />
      </section>
    </>
  );
}
