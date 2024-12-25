"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
const image_1 = __importDefault(require("next/image"));
exports.metadata = {
    title: "Page Not Found",
};
function NotFound() {
    return (<div className="px-2 w-full">
      <div className="flex flex-col items-center justify-center mx-auto py-4 gap-4">
        <h1 className="text-2xl">Page Not Found</h1>

        <image_1.default className="m-0 rounded-xl" src="/images/not-found.png" alt="Page Not Found" width={300} height={300} sizes="300px" priority={true} title="Page Not Found"/>
      </div>
    </div>);
}
exports.default = NotFound;
