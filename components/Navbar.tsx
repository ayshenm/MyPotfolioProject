import { cn } from "@/utils/cn";
import Link from "next/link";
import { FC } from "react";
import dynamic from 'next/dynamic' 

interface IProps {
  navLink: {
    id: number;
    title: string;
    path: string;
  };
  className?: string;
}

const Navbar: FC<IProps> = ({ navLink, className }) => {
  return (
    <li
      key={navLink.id}
      className={cn(
        "text-muted-foreground hover:text-primary text-sm font-medium tracking-wide transition-colors duration-300",
        className
      )}
    >
      <Link href={navLink.path}>{navLink.title}</Link>
    </li>
  );
};


export default dynamic(() => Promise.resolve(Navbar), { ssr: false });