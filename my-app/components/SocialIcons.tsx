import React from "react";
import Link from "next/link";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

type Props = {};

const SocialIcons = (props: Props) => {
  return (
    <div className="hiddem sm:flex-col sm:fixed sm:right-7 sm:top-[43%] text-white text-3xl">
      <Link
        href="https://www.linkedin.com/in/jay-dampitan1985/"
        target="_blank"
      >
        <AiFillLinkedin />
      </Link>
      <Link href="https://github.com/JayDampitan" target="_blank">
        <AiFillGithub className="mt-5" />
      </Link>
    </div>
  );
};

export default SocialIcons;
