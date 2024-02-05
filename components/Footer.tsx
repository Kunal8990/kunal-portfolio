import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className=" bg-[#2d2e32] text-white ">
      <div className=" flex justify-between  items-center  p-10">
        <h1 className=" md:text-2xl">
          Copyright © 2023. All rights are reserved
        </h1>
        <div className=" flex max-md:gap-4 items-center justify-center gap-10">
          <a href="https://github.com/Kunal8990">
            <Github />
          </a>
          <a href="https://twitter.com/Kunaljha67">
            <Twitter />
          </a>
          <a href="https://www.linkedin.com/in/kunal-jha-b54b61240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
            <Linkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
