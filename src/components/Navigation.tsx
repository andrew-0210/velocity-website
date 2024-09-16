import Image from "next/image";
import React from "react";
const links = [
  {
    href: "/",
    label: "Product",
  },
  {
    href: "/",
    label: "Resources",
  },
  {
    href: "/",
    label: "Pricing",
  },
  {
    href: "/",
    label: "Solutions",
  },
  {
    href: "/",
    label: "About us",
  },
];

const Navigation = () => {
  return (
    <nav className="sticky top-[2%] rounded-full bg-[#2a2a2a] px-[1.5rem] py-[0.5rem]">
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
          {links.map((link) => (
            <li key={link.label}>{link.label}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
