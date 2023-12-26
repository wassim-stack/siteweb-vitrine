import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { navlink } from "@/constants/nav-links";
import MobileNav from "./MobileNav";

const NavBar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900/50 backdrop-blur-md z-30">
      <div className="realative container py-6 flex justify-between transition-all">
        <Logo />

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex gap-8 capitalize">
          {navlink.map((link, index) => (
            <Link
              key={index}
              href={`/#${link}`}
              className="text-sm font-semibold tracking-wide text-slate-200"
            >
              {link}
            </Link>
          ))}
        </nav>
        {/* PHONE NAVIGATION */}
        <MobileNav />
      </div>
    </header>
  );
};

export default NavBar;
