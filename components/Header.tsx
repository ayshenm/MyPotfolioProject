"use client";
import { useState } from "react";
import { Menu } from "lucide-react";
import { IoCodeSlash } from "react-icons/io5";
import Link from "next/link";
import { navLinks } from "@/data";
import NavLink from "@/components/Navbar";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="container z-50 relative min-h-20 py-6">
      <nav className="flex justify-between items-center relative">
        {/* Logo and Menu Button */}
        <Link className="cursor-pointer" href="/">
          <IoCodeSlash className="text-3xl" />
        </Link>

        <button onClick={() => setShowMenu(!showMenu)} className="lg:hidden">
          <Menu />
        </button>

        {/* Navigation Links for Large Screens */}
        <ul className="hidden lg:flex gap-x-12">
          {navLinks.map((navLink) => (
            <NavLink key={navLink.id} navLink={navLink} />
          ))}
        </ul>

        {/* Theme Toggle Button */}
        <div className="flex">
          {/* Theme toggle logic goes here */}
        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <div className="absolute top-14 left-0 w-full bg-white p-3 rounded-sm lg:hidden">
            <nav>
              <ul className="flex flex-col items-center gap-y-4">
                {navLinks.map((navLink) => (
                  <NavLink key={navLink.id} navLink={navLink} />
                ))}
              </ul>
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
