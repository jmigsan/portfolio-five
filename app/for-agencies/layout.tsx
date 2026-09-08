import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "For Agencies",
    description:
        "Overflow development capacity for agencies: React and Next.js features, API integrations, auth and billing, AI workflows and Python services. Happy to start with a small paid trial.",
};

export default function ForAgenciesLayout({
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
