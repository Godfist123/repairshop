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
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.middleware = void 0;
const server_1 = require("next/server");
const jwt_1 = require("next-auth/jwt");
const secret = process.env.NEXTAUTH_SECRET;
function middleware(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = yield (0, jwt_1.getToken)({ req, secret });
        const url = req.nextUrl;
        const protectedPaths = ["/customers", "/tickets"];
        const isProtected = protectedPaths.some((path) => url.pathname.startsWith(path));
        if (isProtected && !token) {
            return server_1.NextResponse.redirect(new URL(`/login?next=${url.pathname}`, req.url));
        }
        return server_1.NextResponse.next();
    });
}
exports.middleware = middleware;
exports.config = {
    matcher: ["/customers", "/tickets"],
};
