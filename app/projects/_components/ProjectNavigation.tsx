"use client";

import { usePathname } from "next/navigation";
import DirectionalLink from "../../components/DirectionalLink";
import styles from "./project-navigation.module.css";

const projects = [
    {
        href: "/projects/hymndeck",
        shortLabel: "HymnDeck",
        label: "HymnDeck case study",
        accent: "#315bd6",
    },
    {
        href: "/projects/house-md-chatbot",
        shortLabel: "House MD",
        label: "House MD Chatbot case study",
        accent: "#b1492f",
    },
    {
        href: "/projects/powerpoint-automation",
        shortLabel: "PPT Tool",
        label: "PowerPoint Automation Tool case study",
        accent: "#28735b",
    },
    {
        href: "/projects/vr-language-learning",
        shortLabel: "VR Language",
        label: "VR Language Learning App case study",
        accent: "#7250a8",
    },
] as const;

export default function ProjectNavigation() {
    const pathname = usePathname();

    return (
        <header className={styles.header}>
            <DirectionalLink className={styles.back} href='/'>
                <span aria-hidden='true'>←</span>
                Home
            </DirectionalLink>

            <nav className={styles.rail} aria-label='Project case studies'>
                {projects.map((project) => {
                    const isActive = pathname === project.href;

                    return (
                        <DirectionalLink
                            key={project.href}
                            href={project.href}
                            aria-label={project.label}
                            aria-current={isActive ? "page" : undefined}
                            className={`${styles.projectLink} ${
                                isActive ? styles.active : ""
                            }`}
                            style={
                                {
                                    "--project-accent": project.accent,
                                } as React.CSSProperties
                            }
                        >
                            <span className={styles.tile} aria-hidden='true' />
                            <span className={styles.projectName}>
                                {project.shortLabel}
                            </span>
                        </DirectionalLink>
                    );
                })}
            </nav>
        </header>
    );
}
