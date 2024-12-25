"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const next_auth_1 = __importDefault(require("next-auth"));
const google_1 = __importDefault(require("next-auth/providers/google"));
const handler = (0, next_auth_1.default)({
    providers: [
        (0, google_1.default)({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
    ],
    session: {
        strategy: "jwt", // Use JWTs for session handling
    },
    callbacks: {
        redirect(_a) {
            return __awaiter(this, arguments, void 0, function* ({ url, baseUrl }) {
                console.log("Redirect called with:", { url, baseUrl });
                // Check if the URL includes the `next` parameter
                const nextParam = new URL(url, baseUrl).searchParams.get("next");
                console.log("Extracted `next` parameter:", nextParam);
                if (nextParam) {
                    // Redirect to the `next` parameter if it exists
                    console.log("Redirecting to `next`:", `${baseUrl}${nextParam}`);
                    return `${baseUrl}${nextParam}`;
                }
                // If no `next` parameter, return the provided `url` or fallback to `baseUrl`
                const redirectUrl = url.startsWith("/") ? `${baseUrl}${url}` : url;
                console.log("Redirecting to fallback:", redirectUrl);
                return redirectUrl || baseUrl;
            });
        },
    },
});
exports.GET = handler;
exports.POST = handler;
