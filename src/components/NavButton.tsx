import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import React from "react";

interface NavButtonProps {
  icon: LucideIcon;
  label: string;
  href?: string;
}

const NavButton: React.FC<NavButtonProps> = ({ icon: Icon, label, href }) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={label}
      title={label}
      className="rounded-full"
      asChild
    >
      {href ? (
        <Link href={href}>
          <Icon />
        </Link>
      ) : (
        <Icon />
      )}
    </Button>
  );
};

export default NavButton;
