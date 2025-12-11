import type { Metadata } from "next";
import localFont from "next/font/local";
import { Lora, Edu_SA_Beginner } from "next/font/google";
import "./globals.css";
import TransitionWrapper from "./components/TransitionWrapper";

const nacelleBlack = localFont({
    src: "./assets/Nacelle-Black.otf",
    variable: "--font-nacelle-black",
});

const lora = Lora({
    subsets: ["latin"],
    variable: "--font-lora",
});

const eduSA = Edu_SA_Beginner({
    subsets: ["latin"],
    variable: "--font-edu-sa",
});

export const metadata: Metadata = {
    title: "Juan Miguel Sanchez | Portfolio",
    description: "Juan Miguel Sanchez's Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${nacelleBlack.variable} ${lora.variable} ${eduSA.variable} antialiased h-[100dvh] flex flex-col overflow-hidden`}
            >
                <TransitionWrapper>{children}</TransitionWrapper>
            </body>
        </html>
    );
}
