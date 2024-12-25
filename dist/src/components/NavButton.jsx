"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("next/link"));
const button_1 = require("./ui/button");
const react_1 = __importDefault(require("react"));
const NavButton = ({ icon: Icon, label, href }) => {
    return (<button_1.Button variant="ghost" size="icon" aria-label={label} title={label} className="rounded-full" asChild>
      {href ? (<link_1.default href={href}>
          <Icon />
        </link_1.default>) : (<Icon />)}
    </button_1.Button>);
};
exports.default = NavButton;
