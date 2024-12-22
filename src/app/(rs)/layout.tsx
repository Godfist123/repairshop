import React from "react";
import Header from "@/components/Header";

interface RSLayoutProps {
  children: React.ReactNode;
}

const RSLayout: React.FC<RSLayoutProps> = ({ children }) => {
  return (
    <div className="mx-auto max-w-7xl w-full">
      <Header />
      <div className="px-4 py-2">{children}</div>
    </div>
  );
};

export default RSLayout;
