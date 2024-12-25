"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Header_1 = __importDefault(require("@/components/Header"));
const RSLayout = ({ children }) => {
    return (<div className="mx-auto max-w-7xl w-full">
      <Header_1.default />
      <div className="px-4 py-2">{children}</div>
    </div>);
};
exports.default = RSLayout;
