"use client";
import Container from "@/components/Container";
import Header from "@/components/Header";
import React, { Fragment } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Mail, Telegram, WhatsApp } from "@mui/icons-material";

const About = () => {
  return (
    // <Fragment>
    //   <Header />
    //   <main>
    <section id="about" className="bg-black h-full">
      <Container className="py-20 px-5 text-white flex flex-col gap-10 justify-between">
        <div className="flex flex-col gap-5 w-full lg:w-[45%]">
          <div>
            <h2 className="underline text-4xl font-bold mb-3">ABOUT</h2>
            <a href="mailto:donsmartez@gmail.com" className="text-lg">
              donsmartez@gmail.com
            </a>
          </div>
          <div>
            <p className="text-lg font-bold">
              A self motivated Fullstack web developer with over 5 years of
              hands-on experience in web design and development across diverse
              platforms. Proficient in developing web applications, website
              optimisation, creating efficient user interface, writing, testing,
              and debugging of codes, and continuious integration of innovative
              features on websites based on research, and feedback to ensure
              client and customer satisfaction.
            </p>
          </div>
        </div>
        <div className="text-lg md:flex md:flex-col items-center md:w-[40%]">
          <p>Kaduna, Nigeria</p>
          {/* <p className="md:address md:pl-10">No. 23 Kaduna Close</p> */}
        </div>
        <div className="flex mt-4 gap-4">
          <a
            href="https://twitter.com/michealabah2"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon className="w-8 h-8" />
          </a>
          <a
            href="https://github.com/smartmikey"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/abah-michael"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className="w-8 h-8" />
          </a>
          <a
            href="mailto:donsmartez@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <Mail className="w-8 h-8" />
          </a>
          <a
            href="https://wa.me/message/QFTQKVZI2S3ED1"
            target="_blank"
            rel="noreferrer"
          >
            <WhatsApp className="w-8 h-8" />
          </a>
          <a href="http://t.me/smartmikey" target="_blank" rel="noreferrer">
            <Telegram className="w-8 h-8" />
          </a>
          {/* <a href="#" target="_blank">
                  <FiberDvrRounded className="w-8 h-8" />
                </a> */}
        </div>
      </Container>
    </section>
    //   </main>
    // </Fragment>
  );
};

export default About;
