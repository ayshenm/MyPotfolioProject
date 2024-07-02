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
    <header className="flex justify-between z-50 relative min-h-20 py-6">
      <nav className="flex justify-between items-center relative  w-full ">
        {/* Logo and Menu Button */}
        <div className="flex justify-between ">
          <Link className="cursor-pointer" href="/">
            <IoCodeSlash className="text-3xl" />
          </Link>

          
        </div>
        <div>
          <ul className="hidden lg:flex gap-x-12">
            {navLinks.map((navLink) => (
              <NavLink key={navLink.id} navLink={navLink} />
            ))}
          </ul>
        </div>
        {/* Navigation Links for Large Screens */}

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
        <button onClick={() => setShowMenu(!showMenu)} className="lg:hidden">
            <Menu />
          </button>
      </nav>
    </header>
  );
};

export default Header;
