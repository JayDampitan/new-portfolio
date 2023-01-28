import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SocialIcons from "../components/SocialIcons";
import { useState, useEffect } from "react";

export default function Home() {
  // const [cursorX, setCursorX] = useState();
  // const [cursorY, setCursorY] = useState();

  // useEffect(() => {
  //   window.addEventListener("mousemove", (e: any) => {
  //     setCursorX(e.pageX);
  //     setCursorY(e.pageY);
  //   });
  // }, [cursorX, cursorY]);
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

      {/* <div
        className="cursor"
        style={{
          left: cursorX + "px",
          top: cursorY + "px",
        }}
      ></div> */}
    </>
  );
}
