import React from "react";
import NavButton from "./NavButton";
import Link from "next/link";
import { File, HomeIcon, UserRound } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { LogOut } from "lucide-react";
interface HeaderProps {
  [key: string]: unknown;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className="animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20">
      <div className="flex h-8 items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <NavButton href="/home" icon={HomeIcon} label="Home" />
          <Link
            href="/home"
            className="flex justify-center items-center
            gap-2
            ml-0"
            title="Home"
          >
            <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">
              Dan&apos;s Computer Repair Shop
            </h1>
          </Link>
        </div>

        <div className="flex items-center">
          <NavButton href="/tickets" icon={File} label="Tickets" />

          <NavButton href="/customers" icon={UserRound} label="customers" />
          <ModeToggle />
          <NavButton href="/api/auth/signout" icon={LogOut} label="Log Out" />
        </div>
      </div>
    </header>
  );
};

export default Header;
