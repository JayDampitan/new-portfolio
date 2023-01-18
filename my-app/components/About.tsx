import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import self from "../assets/portfolio.jpg";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="h-screen">
      <h2 className="text-red-500 text-7xl">About page</h2>
    </div>
  );
};

export default About;
