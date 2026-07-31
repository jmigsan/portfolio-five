"use client";

import { ViewTransition } from "react";
import { usePathname } from "next/navigation";
import DirectionalLink from "../../components/DirectionalLink";
import LinkWrapper from "../../components/LinkWrapper";
import styles from "./project-navigation.module.css";

const projects = [
    {
        href: "/projects/hymndeck",
        shortLabel: "HymnDeck",
        label: "HymnDeck case study",
        accent: "#315bd6",
        videoSrc: "/hymndeck-demo.mp4",
    },
    {
        href: "/projects/house-md-chatbot",
        shortLabel: "House MD",
        label: "House MD Chatbot case study",
        accent: "#b1492f",
        videoSrc: "/house-demo.mp4",
    },
    {
        href: "/projects/powerpoint-automation",
        shortLabel: "PPT Tool",
        label: "PowerPoint Automation Tool case study",
        accent: "#28735b",
        videoSrc: "/ppt-demo.mp4",
    },
    {
        href: "/projects/vr-language-learning",
        shortLabel: "VR Language",
        label: "VR Language Learning App case study",
        accent: "#7250a8",
        videoSrc: "/vr-demo.mp4",
    },
] as const;

export default function ProjectNavigation() {
    const pathname = usePathname();

    return (
        <ViewTransition
            name='project-navigation'
            default='project-navigation-static'
        >
            <header className={styles.header}>
            <LinkWrapper>
                <DirectionalLink href='/'>
                    Back to Home <span aria-hidden='true'>→</span>
                </DirectionalLink>
            </LinkWrapper>

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
                            <span className={styles.tile} aria-hidden='true'>
                                <video
                                    className={styles.preview}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload='metadata'
                                >
                                    <source
                                        src={project.videoSrc}
                                        type='video/mp4'
                                    />
                                </video>
                            </span>
                            <span className={styles.projectName}>
                                {project.shortLabel}
                            </span>
                        </DirectionalLink>
                    );
                })}
            </nav>
            </header>
        </ViewTransition>
    );
}
