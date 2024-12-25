"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
const google_1 = require("next/font/google");
require("./globals.css");
const ClientProviders_1 = __importDefault(require("./ClientProviders"));
const geistSans = (0, google_1.Geist)({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});
const geistMono = (0, google_1.Geist_Mono)({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});
exports.metadata = {
    title: {
        template: "%s | Dan's Computer Repair Shop",
        default: "Dan's Computer Repair Shop",
    },
    description: "Computer repair shop",
    applicationName: "Dan's Computer Repair Shop",
};
function RootLayout({ children, }) {
    return (<html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ClientProviders_1.default>{children}</ClientProviders_1.default>
      </body>
    </html>);
}
exports.default = RootLayout;
