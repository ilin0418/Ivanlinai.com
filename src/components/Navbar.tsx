"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";

const hoverStyle = {
  textDecoration: "underline",
  textUnderlineOffset: "0.4em",
  textDecorationThickness: 1.5,
  textDecorationColor: "#CCCCFF",
};

function Navbar() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | undefined>();

  return (
    <ul
      className="flex flex-row flex-wrap justify-end gap-x-4 gap-y-1 sm:flex-col sm:items-end sm:gap-1"
      onMouseLeave={() => setHovered(undefined)}
    >
      <li
        className={`text-right ${
          pathname === "/" ? "text-mypink" : "text-[#e0e0f0]"
        }`}
        onMouseEnter={() => setHovered("home")}
        style={hovered === "home" ? hoverStyle : undefined}
      >
        <a href="/">home</a>
      </li>
      <li
        className={`text-right ${
          pathname === "/experience" ? "text-mypink" : "text-[#e0e0f0]"
        }`}
        onMouseEnter={() => setHovered("experience")}
        style={hovered === "experience" ? hoverStyle : undefined}
      >
        <a href="/experience">experience</a>
      </li>
      <li
        className={`text-right ${
          pathname === "/contact" ? "text-mypink" : "text-[#e0e0f0]"
        }`}
        onMouseEnter={() => setHovered("contact")}
        style={hovered === "contact" ? hoverStyle : undefined}
      >
        <a href="mailto:ivanlin0418@gmail.com">contact</a>
      </li>
      <li
        className={`flex flex-row items-center ${
          pathname === "/resume" ? "text-mypink" : "text-mygray"
        } hover:text-white`}
        onMouseEnter={() => setHovered("resume")}
        style={hovered === "resume" ? hoverStyle : undefined}
      >
        <a
          href="Ivan_Lin_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1"
        >
          <span className="text-right">resume</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
