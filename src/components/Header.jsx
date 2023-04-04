"use client";
import Link from "next/link";
import Container from "./Container";
import { usePathname } from "next/navigation";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { useState } from "react";
import { menuLinks } from "../data/data";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const pathname = usePathname();

  const handleDisplayMobileMenu = () => {
    setMobileMenu(true);
  };

  const menuListItems = menuLinks.map((menu) => (
    <li key={menu.name}>
      <Link
        href={menu.link}
        className={pathname === menu.link ? "text-grayColor" : ""}
      >
        {menu.name}
      </Link>
    </li>
  ));
  return (
    <header className="bg-black">
      <Container className="hidden p-5 md:flex justify-between items-center font-bold">
        <ul className="flex gap-10 text-white">{menuListItems}</ul>
        <a href="tel:+2348122129831" className="text-white">
          <PhoneAndroidIcon className="mr-3" />
          +234-812-212-9831
        </a>
      </Container>
      <div className="p-2 md:hidden">
        <GridViewOutlinedIcon
          className="w-8 h-8 text-white"
          onClick={handleDisplayMobileMenu}
        />
      </div>
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
