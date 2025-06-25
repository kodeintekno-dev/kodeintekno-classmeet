import { useState } from "react";
import { links } from "../data/navbar";
import { twMerge } from "tailwind-merge";

export default function Navbar() {
  const [navHamburger, setNavHamburger] = useState(false);
  return (
    <div className="fixed top-0 inset-x-0 container mx-auto sm:px-12 px-5 space-y-5 z-50">
      <nav className="flex justify-between items-center px-10 py-5 border border-black/10 rounded-lg mt-10 bg-white/80 backdrop-blur-xl">
        <img src="/img/logo.png" alt="KodeinTekno" className="h-6 sm:h-8" />
        <ul className="hidden lg:flex gap-8 items-center">
          {links.map((link, i) => (
            <li key={i}>
              <a
                href={"#" + (link == "Beranda" ? "" : link.toLowerCase())}
                className="text-black/60 font-medium"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div
          className="lg:hidden flex flex-col ml-auto gap-1 w-7 h-5 cursor-pointer"
          id="navMobile"
          onClick={() => setNavHamburger(!navHamburger)}
        >
          <div
            className={twMerge(
              navHamburger && "rotate-45 translate-y-[180%]",
              "w-full h-1 bg-black transition-transform",
            )}
          />
          <div className={navHamburger ? "opacity-0" : "w-full h-1 bg-black"} />
          <div
            className={`${navHamburger && "-rotate-45 -translate-y-[120%]"} w-full h-1 bg-black transition-transform`}
          />
        </div>
      </nav>
      <ul
        className={twMerge(
          navHamburger ? "lg:hidden translate-x-0" : "translate-x-2/1",
          "flex flex-col gap-4 items-center bg-white px-10 py-5 border border-black/10 rounded-lg transition-transform duration-300",
        )}
      >
        {links.map((link, i) => (
          <li key={i}>
            <a
              href={"#" + (link == "Beranda" ? "" : link.toLowerCase())}
              className="text-black/60 font-medium text-xl"
              onClick={() => setNavHamburger(false)}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
