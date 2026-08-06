"use client";

import { ViewTransition } from "react";
import { usePathname } from "next/navigation";
import { House } from "lucide-react";
import DirectionalLink from "../../components/DirectionalLink";
import LinkWrapper from "../../components/LinkWrapper";
import styles from "./project-navigation.module.css";

const projects = [
    {
        href: "/projects/hymndeck",
        shortLabel: "HymnDeck",
        label: "HymnDeck case study",
        accent: "#d4a017",
        videoSrc: "/hymndeck-demo-small.mp4",
        posterSrc: "/hymndeck-demo-small-poster.webp",
    },
    {
        href: "/projects/house-md-chatbot",
        shortLabel: "House MD",
        label: "House MD Chatbot case study",
        accent: "#173b6c",
        videoSrc: "/house-demo-small.mp4",
        posterSrc: "/house-demo-small-poster.webp",
    },
    {
        href: "/projects/powerpoint-automation",
        shortLabel: "PPT Tool",
        label: "PowerPoint Automation Tool case study",
        accent: "#159a9c",
        videoSrc: "/ppt-demo-small.mp4",
        posterSrc: "/ppt-demo-small-poster.webp",
    },
    {
        href: "/projects/vr-language-learning",
        shortLabel: "VR Language",
        label: "VR Language Learning App case study",
        accent: "#7250a8",
        videoSrc: "/vr-demo-small.mp4",
        posterSrc: "/vr-demo-small-poster.webp",
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
                <LinkWrapper className={styles.homeLink}>
                    <DirectionalLink href='/' aria-label='Back to Home'>
                        <span
                            className={styles.homeArrow}
                            aria-hidden='true'
                        >
                            ←
                        </span>{" "}
                        <span className={styles.desktopHomeLabel}>
                            Back to Home
                        </span>
                        <span className={styles.mobileHomeLabel}>Home</span>
                        <House
                            className={styles.mobileHomeIcon}
                            size={24}
                            strokeWidth={1.75}
                            aria-hidden='true'
                        />
                    </DirectionalLink>
                </LinkWrapper>

                <div className={styles.railViewport}>
                    <nav
                        className={styles.rail}
                        aria-label='Project case studies'
                    >
                        {projects.map((project) => {
                            const isActive = pathname === project.href;

                            return (
                                <DirectionalLink
                                    key={project.href}
                                    href={project.href}
                                    aria-label={project.label}
                                    aria-current={isActive ? "page" : undefined}
                                    className={`${styles.projectLink} ${isActive ? styles.active : ""
                                        }`}
                                    style={
                                        {
                                            "--project-accent": project.accent,
                                        } as React.CSSProperties
                                    }
                                >
                                    <span
                                        className={styles.tile}
                                        aria-hidden='true'
                                    >
                                        <video
                                            className={styles.preview}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            preload='metadata'
                                            poster={project.posterSrc}
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
                </div>
            </header>
        </ViewTransition>
    );
}
