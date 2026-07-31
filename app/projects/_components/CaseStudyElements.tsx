import type { ReactNode } from "react";
import DirectionalLink from "../../components/DirectionalLink";
import styles from "./case-study.module.css";

export function MediaFrame({
    children,
    caption,
    wide = false,
}: {
    children: ReactNode;
    caption?: ReactNode;
    wide?: boolean;
}) {
    return (
        <figure className={`${styles.mediaFrame} ${wide ? styles.wide : ""}`}>
            <div className={styles.mediaSurface}>{children}</div>
            {caption ? (
                <figcaption className={styles.caption}>{caption}</figcaption>
            ) : null}
        </figure>
    );
}

export function ProjectFacts({ children }: { children: ReactNode }) {
    return <dl className={styles.factGrid}>{children}</dl>;
}

export function ProjectFact({
    label,
    children,
}: {
    label: string;
    children: ReactNode;
}) {
    return (
        <div className={styles.fact}>
            <dt>{label}</dt>
            <dd>{children}</dd>
        </div>
    );
}

export function PullQuote({ children }: { children: ReactNode }) {
    return <blockquote className={styles.pullQuote}>{children}</blockquote>;
}

export function ProjectPager({
    nextHref,
    nextTitle,
}: {
    nextHref: string;
    nextTitle: string;
}) {
    return (
        <footer className={`${styles.projectPager} ${styles.readingColumn}`}>
            <span>Next case study</span>
            <DirectionalLink href={nextHref} direction='left'>
                {nextTitle}
                <span aria-hidden='true'> →</span>
            </DirectionalLink>
        </footer>
    );
}
