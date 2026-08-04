import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description:
        "Learn more about Juan Miguel Sanchez, background in software engineering, product design, and continuous learning.",
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='h-screen overflow-y-auto overflow-x-hidden'>
            {children}
        </div>
    );
}
