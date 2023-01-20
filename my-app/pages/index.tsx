import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jay Dampitan</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <section id="/" className="">
        <Hero />
      </section>

      <section id="skills" className="snap snap-mandatory">
        <Skills />
      </section>

      <section id="about" className="">
        <About />
      </section>

      <section id="projects" className="">
        <Work />
      </section>

      <section id="contact" className="">
        <Contact />
      </section>

      <section id="footer" className="">
        <Footer />
      </section>
    </>
  );
}
