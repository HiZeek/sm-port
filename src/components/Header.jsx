"use client";
import Link from "next/link";
import Container from "./Container";
import { usePathname } from "next/navigation";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { menuLinks } from "../data/data";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Mail, Telegram, WhatsApp } from "@mui/icons-material";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const pathname = usePathname();

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else {
      header.classList.remove("scroll-header");
    }
  });

  const handleDisplayMobileMenu = () => {
    setMobileMenu(true);
  };

  const handleHideMobileMenu = () => {
    setMobileMenu(false);
  };

  const menuListItems = menuLinks.map((menu) => (
    <li key={menu.name}>
      <a
        href={menu.link}
        // className={pathname === menu.link ? "text-grayColor" : ""}
        onClick={handleHideMobileMenu}
      >
        {menu.name}
      </a>
    </li>
  ));
  return (
    <header className="bg-black header">
      <Container className="hidden p-5 md:flex justify-between items-center font-bold">
        <ul className="flex gap-10 text-white">{menuListItems}</ul>
        <a href="tel:+2349045769460" className="text-white">
          <PhoneAndroidIcon className="mr-3" />
          +234-904-576-9460
        </a>
      </Container>
      <div className="p-2 md:hidden">
        <div className="flex flex-col items-end">
          <GridViewOutlinedIcon
            className="w-8 h-8 text-white"
            onClick={handleDisplayMobileMenu}
          />
        </div>
      </div>
      {mobileMenu && (
        <div className="bg-black h-screen w-screen fixed top-0 left-0 z-50 flex flex-col justify-center gap-10 p-5 md:hidden">
          <CloseIcon
            onClick={handleHideMobileMenu}
            className="w-8 h-8 text-white absolute top-5 right-5"
          />
          <div className="flex flex-col items-center font-bold">
            <ul className="flex flex-col items-center gap-10 text-white">
              {menuListItems}
            </ul>
            <a
              href="tel:+2349045769460"
              className="text-white mt-10 text-center"
            >
              <PhoneAndroidIcon className="mr-3" />
              +234-904-576-9460
            </a>
          </div>
          <div className="flex mt-4 items-center justify-center gap-4 absolute bottom-10 text-white">
            <a href="https://twitter.com/michealabah2" target="_blank">
              <TwitterIcon className="w-8 h-8" />
            </a>
            <a href="https://github.com/smartmikey" target="_blank">
              <GitHubIcon className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/abah-michael" target="_blank">
              <LinkedInIcon className="w-8 h-8" />
            </a>
            <a href="mailto:donsmartez@gmail.com" target="_blank">
              <Mail className="w-8 h-8" />
            </a>
            <a href="https://wa.me/message/QFTQKVZI2S3ED1" target="_blank">
              <WhatsApp className="w-8 h-8" />
            </a>
            <a href="http://t.me/smartmikey" target="_blank">
              <Telegram className="w-8 h-8" />
            </a>
            {/* <a href="#" target="_blank">
                  <FiberDvrRounded className="w-8 h-8" />
                </a> */}
          </div>
        </div>
      )}

      {/* {mobileMenu && (
          <div
            className={
              mobileMenu
                ? "translate-y-[200%] bg-black"
                : " h-full w-screen fixed top-0 left-0 p-10 translate-y-[185%] z-20 duration-500 flex flex-col items-center gap-10"
            }
          >
            <ul className="flex flex-col items-center font-bold gap-10 text-white">
              {menuListItems}
            </ul>
            <a
              href="tel:+2348122129831"
              className="text-white mt-10 text-center"
            >
              <PhoneAndroidIcon className="mr-3" />
              +234-812-212-9831
            </a>
          </div>
        )} */}

      {/* <Container className="hidden p-5 md:flex justify-between items-center font-bold">
        <ul className="flex gap-10 text-white">{menuListItems}</ul>
        <a href="tel:+2348122129831" className="text-white">
          <PhoneAndroidIcon className="mr-3" />
          +234-812-212-9831
        </a>
      </Container> */}
    </header>
  );
};

export default Header;
