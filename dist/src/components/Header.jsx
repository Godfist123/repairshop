"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const NavButton_1 = __importDefault(require("./NavButton"));
const link_1 = __importDefault(require("next/link"));
const lucide_react_1 = require("lucide-react");
const ModeToggle_1 = require("./ModeToggle");
const lucide_react_2 = require("lucide-react");
const Header = (props) => {
    return (<header className="animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20">
      <div className="flex h-8 items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <NavButton_1.default href="/home" icon={lucide_react_1.HomeIcon} label="Home"/>
          <link_1.default href="/home" className="flex justify-center items-center
            gap-2
            ml-0" title="Home">
            <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">
              Dan&apos;s Computer Repair Shop
            </h1>
          </link_1.default>
        </div>

        <div className="flex items-center">
          <NavButton_1.default href="/tickets" icon={lucide_react_1.File} label="Tickets"/>

          <NavButton_1.default href="/customers" icon={lucide_react_1.UserRound} label="customers"/>
          <ModeToggle_1.ModeToggle />
          <NavButton_1.default href="/api/auth/signout" icon={lucide_react_2.LogOut} label="Log Out"/>
        </div>
      </div>
    </header>);
};
exports.default = Header;
