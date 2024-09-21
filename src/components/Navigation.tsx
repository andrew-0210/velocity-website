"use client";

import Image from "next/image";
import React from "react";
import Container from "./Container";
import { usePathname } from "next/navigation";
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
  const login = () => {};
  const pathname = usePathname();
  return (
    <Container className="relative">
      <nav className="absolute top-[1.5rem] z-[999] flex w-full justify-between rounded-full bg-[#2a2a2a] px-[1.5rem] py-[0.5rem]">
        <div className="flex items-center gap-4">
          <div className="relative h-[3rem] w-[8rem]">
            <Image
              src="velocity_logo.svg"
              fill={true}
              alt="velocity_logo"
              className="object-fill"
            />
          </div>
          <div className="h-[1.75rem] w-[1px] bg-white" />
          <ul className="flex gap-4 text-[0.875rem] text-[#fffffa]">
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
                      isActive ? "font-bold text-[#b33fe1]" : "text-white"
                    }
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex">
          <Button intent="secondary">Login</Button>
          <Button intent="primary">Get Started</Button>
        </div>
      </nav>
    </Container>
  );
};

export default Navigation;
