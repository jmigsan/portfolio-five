import type { Metadata } from "next";
import ProjectNavigation from "./_components/ProjectNavigation";
import styles from "./projects.module.css";

export const metadata: Metadata = {
    title: "Case Studies",
    description:
        "Product engineering case studies by Juan Miguel Sanchez, from problem discovery to production deployment.",
};

export default function CaseStudiesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={styles.projectsViewport} data-projects-viewport>
            <ProjectNavigation />
            {children}
        </div>
    );
}
