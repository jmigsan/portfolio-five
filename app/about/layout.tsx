import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description:
        "Juan Miguel Sanchez is a product-minded software engineer who designed, built and operates HymnDeck, an AI automation SaaS for church teams.",
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
