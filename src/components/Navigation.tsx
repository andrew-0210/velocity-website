"use client";

import Image from "next/image";
import { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMenu,
  AiOutlineX,
} from "react-icons/ai";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Button from "./Button";
const links = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/product",
    name: "Product",
  },
  {
    href: "/resources",
    name: "Resources",
  },
  {
    href: "/pricing",
    name: "Pricing",
  },
  {
    href: "/solutions",
    name: "Solutions",
  },
  {
    href: "/about_us",
    name: "About us",
  },
];

const Navigation = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/login");
  };
  const handleSignUp = () => {
    router.push("/sign_up");
  };

  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed inset-x-0 z-[999] flex w-screen justify-center bg-[#898989]/20 backdrop-blur-md">
      <nav className="relative flex w-screen items-center justify-between px-[1.25rem] py-[0.5rem] md:mx-[2rem] xl:max-w-[90em]">
        <div className="flex items-center gap-4">
          <div className="relative h-[3rem] w-[8rem]">
            <Image
              src="velocity_logo.svg"
              fill={true}
              alt="velocity_logo"
              className="object-fill"
            />
          </div>
          <div className="hidden h-[1.75rem] w-[1px] bg-black lg:flex" />
          <ul className="hidden gap-4 text-[0.875rem] lg:flex">
            {links.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === link.href
                  : pathname.startsWith(link.href);
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={
                      isActive ? "font-bold text-[#b33fe1]" : "text-[#2a2a2a]"
                    }
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden lg:flex">
          <Button intent="secondary" onClick={handleLogin}>
            Login
          </Button>
          <Button intent="primary" onClick={handleSignUp}>
            Get Started
          </Button>
        </div>
        <div
          onClick={handleNav}
          className="cursor-pointer rounded-lg border-2 border-[#939393] p-[0.5rem] lg:hidden"
        >
          <AiOutlineMenu color="#939393" size={24} />
        </div>
        <div
          className={
            menuOpen
              ? "absolute inset-x-0 inset-y-0 z-[500] flex h-screen w-full flex-col gap-4 bg-[#fafafa]/90 px-[1rem] py-[2rem] backdrop-blur-md duration-300 ease-in md:hidden"
              : "absolute inset-x-0 top-[-700%] flex flex-col gap-4 px-[1rem] py-[2rem] duration-300 ease-in"
          }
        >
          <div className="flex justify-between">
            <div className="relative h-[2.5rem] w-[8rem]">
              <Image
                src="velocity_logo.svg"
                fill={true}
                alt="velocity_logo"
                className="object-contain"
              />
            </div>
            <div
              onClick={handleNav}
              className="left-0 rounded-lg bg-[#dddddd] p-[0.5rem]"
            >
              <AiOutlineClose size={24} color="black" />
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-between">
            <ul className="flex flex-col gap-2 py-[1rem] text-[1rem] font-semibold">
              {links.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === link.href
                    : pathname.startsWith(link.href);
                return (
                  <li
                    key={link.name}
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="py-[0.25rem]"
                  >
                    <Link
                      href={link.href}
                      className={
                        isActive ? "font-bold text-[#b33fe1]" : "text-[#2a2a2a]"
                      }
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="flex gap-2">
              <div className="rounded-full border border-[#4a4a4a] p-[0.5rem]">
                <AiOutlineLinkedin size={24} color="#4a4a4a" />
              </div>
              <div className="rounded-full border border-[#4a4a4a] p-[0.5rem]">
                <AiOutlineInstagram size={24} color="#4a4a4a" />
              </div>
              <div className="rounded-full border border-[#4a4a4a] p-[0.5rem]">
                <AiOutlineFacebook size={24} color="#4a4a4a" />
              </div>
              <div className="rounded-full border border-[#4a4a4a] p-[0.5rem]">
                <AiOutlineX size={24} color="#4a4a4a" />
              </div>
            </div>
            <div className="flex flex-1 flex-row items-end justify-end gap-1">
              <Button intent="secondary" onClick={handleLogin}>
                Login
              </Button>
              <Button intent="primary" onClick={handleSignUp}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
