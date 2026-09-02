"use client";

import { useEffect } from "react";
import type { MouseEvent } from "react";
import styles from "./page.module.css";

const sections = [
    ["problem", "Problem"],
    ["product", "Product"],
    ["channels", "WhatsApp"],
    ["architecture", "Architecture"],
    ["engineering", "Engineering"],
    ["results", "Results"],
    ["lessons", "Lessons"],
] as const;

const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    const scrollContainer = document.querySelector<HTMLElement>(
        "[data-projects-viewport]",
    );

    if (!target || !scrollContainer) return;

    const targetTop = target.getBoundingClientRect().top;
    const containerTop = scrollContainer.getBoundingClientRect().top;
    const scrollMargin = Number.parseFloat(
        window.getComputedStyle(target).scrollMarginTop,
    );

    scrollContainer.scrollTo({
        top:
            scrollContainer.scrollTop +
            targetTop -
            containerTop -
            (Number.isFinite(scrollMargin) ? scrollMargin : 0),
        behavior: "auto",
    });
};

export default function CaseStudyIndex() {
    useEffect(() => {
        const handleHashChange = () => {
            const sectionId = window.location.hash.slice(1);
            if (sectionId) scrollToSection(decodeURIComponent(sectionId));
        };

        window.addEventListener("hashchange", handleHashChange);
        if (window.location.hash) requestAnimationFrame(handleHashChange);

        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    const navigateToSection = (
        event: MouseEvent<HTMLAnchorElement>,
        sectionId: string,
    ) => {
        if (
            event.metaKey ||
            event.ctrlKey ||
            event.shiftKey ||
            event.altKey
        ) {
            return;
        }

        event.preventDefault();
        window.history.pushState(null, "", `#${sectionId}`);
        scrollToSection(sectionId);
    };

    return (
        <nav className={styles.caseIndex} aria-label='Case study sections'>
            <span>Inside the build</span>
            <div className={styles.caseIndexLinks}>
                {sections.map(([id, label]) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        onClick={(event) => navigateToSection(event, id)}
                    >
                        {label}
                    </a>
                ))}
            </div>
        </nav>
    );
}
