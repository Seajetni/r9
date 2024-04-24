import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
 
export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  
  return (
    <nav className="flex">
        <Link href={'#'} className=" bg-[url('/button/home2.png')] w-40 h-11 hover:bg-[url('/button/home.png')]" />
        <Link href={'#'} className=" bg-[url('/button/22.png')] w-40 h-11 hover:bg-[url('/button/2.png')]" />
        <Link href={'#'} className=" bg-[url('/button/33.png')] w-40 h-11 hover:bg-[url('/button/3.png')]" />
        <Link href={'#'} className=" bg-[url('/button/44.png')] w-40 h-11 hover:bg-[url('/button/4.png')]" />
        <Link href={'#'} className=" bg-[url('/button/55.png')] w-40 h-11 hover:bg-[url('/button/5.png')]" />
        <Link href={'#'} className=" bg-[url('/button/66.png')] w-40 h-11 hover:bg-[url('/button/6.png')]" />
        <Link href={'#'} className=" bg-[url('/button/77.png')] w-40 h-11 hover:bg-[url('/button/7.png')]" />
    </nav>
  );
}