"use client";
import { Fragment } from "react";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Link from "next/link";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Mail, Telegram, WhatsApp } from "@mui/icons-material";

export default function Home() {
  return (
    // <Fragment>
    //   <Header />
    //   <main>
    <section id="backdrop">
      <Container className="py-20 px-5 h-full text-white flex flex-col justify-center">
        <div>
          <h1 className="text-6xl">
            MICHAEL MONDAY
            <br />
            <span className="font-black">ABAH</span>
          </h1>
          <p className="tracking-[.25em] text-xl">Fullstack Web Developer</p>
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
          <div className="flex gap-6 items-center mt-8">
            {/* <Link
                  href="/resume"
                  className="border border-white rounded-2xl py-3 px-5"
                >
                  Resume
                </Link> */}
            <a
              href="#portfolio"
              className="border border-white rounded-2xl py-3 px-5"
            >
              Portfolio
            </a>
          </div>
        </div>
      </Container>
    </section>
    //   </main>
    // </Fragment>
  );
}
