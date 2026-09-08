import DirectionalLink from "../components/DirectionalLink";
import LinkWrapper from "../components/LinkWrapper";
import styles from "./for-agencies.module.css";

const goodFit = [
    "React and Next.js features in an existing codebase",
    "API and third-party integrations",
    "Auth, billing and account plumbing",
    "AI workflows: extraction, generation, background jobs, retries",
    "Python services and FastAPI endpoints",
    "Bug fixes, cleanup and deployment work nobody has time for",
];

const ForAgencies = () => {
    return (
        <div className='flex-col font-lora p-10 overflow-hidden'>
            <div className='flex justify-between -mt-4 mb-8 md:mb-10'>
                <LinkWrapper>
                    <DirectionalLink href='/contact' direction='down'>
                        Work With Me ↑
                    </DirectionalLink>
                </LinkWrapper>
                <LinkWrapper>
                    <DirectionalLink href='/'>Back to Home ↓</DirectionalLink>
                </LinkWrapper>
            </div>

            <div className='max-w-2xl mx-auto pb-16'>
                <h1 className={styles.heading1}>
                    Need another pair of engineering hands?
                </h1>

                <p className={styles.paragraph}>
                    I&apos;m a full stack developer in West London. I take
                    ownership of a clearly scoped feature or problem and carry
                    it from brief through implementation, testing and
                    deployment, working inside your process rather than beside
                    it.
                </p>

                <p className={styles.paragraph}>
                    Most recently I designed, built, deployed and supported{" "}
                    <DirectionalLink
                        href='/case-studies/hymndeck'
                        className='font-bold underline underline-offset-4'
                    >
                        HymnDeck
                    </DirectionalLink>
                    , a production SaaS running on Next.js, FastAPI, Postgres
                    and Google Cloud, with auth, billing, background jobs,
                    document processing and AI orchestration. It has stayed in
                    production since April 2026 without manual intervention to
                    keep it alive.
                </p>

                <h2 className={styles.heading2}>Good fit</h2>

                <ul className={styles.list}>
                    {goodFit.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>

                <h2 className={styles.heading2}>How I work</h2>

                <p className={styles.paragraph}>
                    Your repo, your branch strategy, your review process. I
                    prefer a written scope up front so we both know what
                    &quot;done&quot; means, and I&apos;d rather raise a problem
                    early than discover it at handover. You get working code
                    reviewed the way the rest of your team&apos;s code is
                    reviewed, not a black box delivered at the end.
                </p>

                <div className={styles.callout}>
                    <p>
                        <strong>
                            Happy to start with a small paid trial.
                        </strong>{" "}
                        A bug fix, a page implementation, an integration or a
                        small feature is the cheapest way for both of us to find
                        out whether this works, before either side commits to
                        anything ongoing.
                    </p>
                </div>

                <p className={styles.stack}>
                    Next.js · FastAPI · TypeScript · Python · PostgreSQL · GCP
                </p>

                <p className={styles.paragraph}>
                    <DirectionalLink
                        href='/contact'
                        className='font-bold underline underline-offset-4'
                    >
                        Get in touch
                    </DirectionalLink>{" "}
                    if you have more delivery work than hands, or read the{" "}
                    <DirectionalLink
                        href='/case-studies/hymndeck'
                        className='font-bold underline underline-offset-4'
                    >
                        HymnDeck case study
                    </DirectionalLink>{" "}
                    to see how I think about building and shipping.
                </p>
            </div>
        </div>
    );
};

export default ForAgencies;
