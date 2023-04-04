"use client";
import { Fragment } from "react";
import Header from "../components/Header";
import Container from "@/components/Container";
import Link from "next/link";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <main>
        <section id="backdrop" className="relative">
          <Container className="py-20 px-5 h-full text-white flex flex-col justify-center">
            <div>
              <h1 className="text-6xl">
                SMART
                <br />
                <span className="font-black">MIKE</span>
              </h1>
              <p className="tracking-[.25em] text-xl">Web Developer</p>
              <div className="flex gap-6 items-center mt-8">
                <Link
                  href="/resume"
                  className="border border-white rounded-2xl py-3 px-5"
                >
                  Resume
                </Link>
                <Link
                  href="/portfolio"
                  className="border border-white rounded-2xl py-3 px-5"
                >
                  Portfolio
                </Link>
              </div>
            </div>
            <div className="flex gap-4 absolute bottom-10">
              <a href="#" target="_blank">
                <TwitterIcon className="w-8 h-8" />
              </a>
              <a href="#" target="_blank">
                <GitHubIcon className="w-8 h-8" />
              </a>
              <a href="#" target="_blank">
                <LinkedInIcon className="w-8 h-8" />
              </a>
            </div>
          </Container>
        </section>
      </main>
    </Fragment>
  );
}
