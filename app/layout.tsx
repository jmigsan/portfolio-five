import type { Metadata } from "next";
import localFont from "next/font/local";
import { Lora } from "next/font/google";
import "./globals.css";
import RouteViewTransition from "./components/RouteViewTransition";

const nacelleBlack = localFont({
    src: "./assets/Nacelle-Black.otf",
    variable: "--font-nacelle-black",
});

const lora = Lora({
    subsets: ["latin"],
    variable: "--font-lora",
});

export const metadata: Metadata = {
    title: {
        default: "Juan Miguel Sanchez | Full-Stack Product Engineer",
        template: "%s | Juan Miguel Sanchez",
    },
    description:
        "Personal portfolio of Juan Miguel Sanchez — Full-Stack Product Engineer specializing in AI applications and design engineering.",
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
