"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const ThemeProvider_1 = require("@/components/ThemeProvider");
const react_1 = require("next-auth/react");
function ClientProviders({ children, }) {
    return (<react_1.SessionProvider>
      <ThemeProvider_1.ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider_1.ThemeProvider>
    </react_1.SessionProvider>);
}
exports.default = ClientProviders;
