"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("next/link"));
require("reflect-metadata");
function Home() {
    return (<div className="bg-black bg-home-img bg-cover bg-center ">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className=" flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1 className="text-4xl font-bold">
            Dan&apos;s Computer
            <br /> Repair Shop
          </h1>
          <address>
            Melbourne VIC 3000
            <br />
            Australia
          </address>
          <p>Open 9am - 5pm</p>
          <link_1.default href="tel:123321123" className="hover:underline">
            123-321-123
          </link_1.default>
        </div>
      </main>
    </div>);
}
exports.default = Home;
