"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("next-auth/react");
const react_2 = __importDefault(require("react"));
const button_1 = require("@/components/ui/button");
const SignIn = (props) => {
    return (<div className="flex flex-col items-center  h-dvh gap-4 mt-6 ">
      <h1 className="text-3xl font-bold">Sign in</h1>
      <button_1.Button onClick={() => (0, react_1.signIn)("google")}>Sign in with Google</button_1.Button>
    </div>);
};
exports.default = SignIn;
