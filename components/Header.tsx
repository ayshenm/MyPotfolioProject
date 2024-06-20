"use client";
// import { useTheme } from "@/components/contexts/ThemeProvider";
// import { Button } from "@/components/ui/button";
import { CodeXml, Menu, Moon, Sun } from "lucide-react";
import { navLinks } from "@/data";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useState } from "react";
import NavLink from "@/components/Navbar";
import { IoCodeOutline, IoCodeSlash } from "react-icons/io5";
import Link from "next/link";

const Header = () => {
  // const { theme, toggleTheme } = useTheme();
  const matches = useMediaQuery("(min-width: 1024px)");
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="container z-50 relative min-h-20 py-6">
      <nav className="flex justify-between items-center relative">
        {!matches ? (
          <button onClick={() => setShowMenu(!showMenu)}>
            <Menu />
          </button>
        ) : (
          <>
            <Link className="cursor-pointer" href="/">
              <IoCodeSlash className="text-3xl" />
            </Link>

            <ul className="flex gap-x-12">
              {navLinks.map((navLink) => {
                return <NavLink key={navLink.id} navLink={navLink} />;
              })}
            </ul>
          </>
        )}

        <div className="flex">
          {/* <button onClick={toggleTheme}>
            {theme === "dark" ? <Moon color="white" /> : <Sun />}
          </button> */}
        </div>

        {showMenu && (
          <div className="absolute top-14 border border-white-100 w-full p-3 rounded-sm lg:hidden">
            <nav>
              <Link className="cursor-pointer" href="/">
                <IoCodeSlash className="text-3xl" />
              </Link>
              <ul className="flex-center gap-x-12 ">
                {navLinks.map((navLink) => {
                  return <NavLink key={navLink.id} navLink={navLink} />;
                })}
              </ul>
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
