import Head from "next/head";
import Navbar from "../components/nav/Navbar";
import Hero from "../components/home/Hero";
import About from "../components/about/About";
import Work from "../components/work/Work";
import Contact from "../components/contact/Contact";
import Loader from "../components/utils/loader/Loader";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jay Dampitan</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/website-preview.png" />
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
