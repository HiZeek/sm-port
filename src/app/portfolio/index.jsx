"use client";
import Container from "@/components/Container";
import Header from "@/components/Header";
import { projectsData, projectsDataNav } from "@/data/data";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const Portfolio = () => {
  // const [item, setItem] = useState({ name: "all" });
  // const [projects, setProjects] = useState([]);
  // const [active, setActive] = useState(0);
  // const [visibleItem, setVisibleItem] = useState(4);
  // const [hideLoadMore, setHideLoadMore] = useState(false);

  // useEffect(() => {
  //   if (item.name === "all") {
  //     setProjects(projectsData);
  //   } else {
  //     const newProjects = projectsData.filter(
  //       (project) => project.category.toLowerCase() === item.name
  //     );
  //     setProjects(newProjects);
  //   }
  // }, [item]);

  // const handleClick = (e, index) => {
  //   setItem({ name: e.target.textContent.toLowerCase() });
  //   setActive(index);
  // };

  return (
    // <Fragment>
    //   <Header />
    //   <main>
    <section id="portfolio" className="bg-black portfolio text-white">
      <Container className="py-20 px-5">
        <h2 className="underline text-center text-4xl font-bold mb-3">
          Portfolio
        </h2>
        <p className="text-lg text-center">My recent works</p>
        {/* <div className="flex items-center justify-center gap-4 mt-4">
          {projectsDataNav.map((item, index) => (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${
                active === index
                  ? "text-grayColor md:border border-grayColor"
                  : "md:border border-white"
              } md:py-3 md:px-5 cursor-pointer rounded-2xl`}
              key={index}
            >
              {item.name}
            </span>
          ))}
        </div> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center mt-10 gap-10 lg:w-[968px] m-auto">
          {projectsData.map((item) => (
            <div
              key={item.title}
              className="bg-white p-4 rounded-2xl md:w-[460px] justify-self-center text-black"
            >
              <Image
                src={item.image}
                width={460}
                height={460}
                alt="Portfolio"
                // className="md:w-[460px] md:h-[460px]"
              />
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-grayColor mb-2">{item.desc}</p>
              <a
                href={item.url}
                className="text-xs text-black group  duration-500"
                target="_blank"
                rel="noreferrer"
              >
                View{" "}
                <ArrowForwardOutlinedIcon className="!w-[12px] !h-[12px] transition group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 justify-center mt-10 gap-10 w-[968px] m-auto">
              {projects.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-2 md:p-4 rounded-2xl w-[460px] justify-self-center text-black"
                >
                  <Image
                    src={item.image}
                    width={460}
                    height={460}
                    className="w-[460px] h-[460px]"
                    alt="Portfolio"
                  />
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-grayColor mb-2">{item.desc}</p>
                  <a
                    href={item.url}
                    className="text-xs text-black group  duration-500"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View{" "}
                    <ArrowForwardOutlinedIcon className="w-4 h-4 transition group-hover:translate-x-1" />
                  </a>
                </div>
              ))}
            </div> */}
      </Container>
    </section>
    //   </main>
    // </Fragment>
  );
};

export default Portfolio;
