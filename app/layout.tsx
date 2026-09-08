import type { Metadata } from "next";
import localFont from "next/font/local";
import { Lora } from "next/font/google";
import "./globals.css";
import RouteViewTransition from "./components/RouteViewTransition";

const nacelleBlack = localFont({
    src: "./assets/Nacelle-Black.woff2",
    variable: "--font-nacelle-black",
    display: "swap",
});

const lora = Lora({
    subsets: ["latin"],
    variable: "--font-lora",
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "Juan Miguel Sanchez | Full-Stack Product Engineer",
        template: "%s | Juan Miguel Sanchez",
    },
    description:
        "Juan Miguel Sanchez builds full stack web apps with Next.js, TypeScript, Python and Postgres, including the AI workflows inside them. Available for freelance and contract work in London or remote.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${nacelleBlack.variable} ${lora.variable} antialiased h-[100dvh] flex flex-col overflow-hidden`}
            >
                <RouteViewTransition>{children}</RouteViewTransition>
            </body>
        </html>
    );
}
