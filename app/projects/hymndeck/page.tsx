import type { Metadata } from "next";
import {
    MediaFrame,
    ProjectFact,
    ProjectFacts,
    ProjectPager,
    PullQuote,
} from "../_components/CaseStudyElements";
import shared from "../_components/case-study.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "HymnDeck — B2B SaaS Case Study",
    description:
        "How Juan Miguel Sanchez turned a recurring two-hour workflow into a production AI automation SaaS.",
};

export default function HymnDeckCaseStudy() {
    return (
        <main className={`${shared.caseStudy} ${styles.page}`}>
            <header className={`${shared.hero} ${shared.readingColumn}`}>
                <p className={shared.eyebrow}>Case study · Product engineering</p>
                <h1>HymnDeck</h1>
                <p className={shared.tagline}>
                    Turning a repetitive weekly task into a production AI
                    automation product.
                </p>
            </header>

            <MediaFrame
                wide
                caption='The current HymnDeck product flow. This demo can later be replaced by a narrated walkthrough or a more visual product story.'
            >
                <video controls muted playsInline preload='metadata'>
                    <source src='/hymndeck-demo.mp4' type='video/mp4' />
                    Your browser does not support embedded video.
                </video>
            </MediaFrame>

            <article className={shared.articleBody}>
                <div className={shared.readingColumn}>
                    <p className={shared.standfirst}>
                        I am early in my engineering career, but I have already
                        taken a real product from an observed problem to working
                        software, then rebuilt it as a production B2B SaaS. HymnDeck
                        is the clearest example of how I like to work: close to the
                        user, responsible for the whole system, and focused on
                        shipping something useful.
                    </p>

                    <ProjectFacts>
                        <ProjectFact label='Role'>
                            Solo product engineer
                        </ProjectFact>
                        <ProjectFact label='Product'>
                            AI workflow automation SaaS
                        </ProjectFact>
                        <ProjectFact label='Workflow impact'>
                            About 2 hours → 15 minutes
                        </ProjectFact>
                        <ProjectFact label='Ownership'>
                            Product, frontend, backend and cloud
                        </ProjectFact>
                    </ProjectFacts>

                    <section className={shared.section}>
                        <p className={shared.sectionLabel}>The problem</p>
                        <h2>A small task that happened every week</h2>
                        <p>
                            Preparing church presentation slides was predictable,
                            necessary and slow. Operators repeatedly gathered the
                            same kinds of information, moved it into PowerPoint and
                            checked the result by hand. A single run could take
                            roughly two hours.
                        </p>
                        <p>
                            That made it a good product problem. The work had a
                            clear trigger, a repeatable sequence and an observable
                            outcome. More importantly, I could speak directly with
                            the people doing it and understand where an automation
                            tool would help—and where it would simply create a new
                            kind of friction.
                        </p>
                    </section>

                    <section className={shared.section}>
                        <p className={shared.sectionLabel}>The first version</p>
                        <h2>Prove the workflow before building the platform</h2>
                        <p>
                            I started with a focused desktop automation tool rather
                            than a SaaS architecture. It generated PowerPoint files
                            for nontechnical operators and reduced the preparation
                            process from hours to minutes. That version gave me
                            something more useful than a speculative roadmap: real
                            usage and concrete feedback.
                        </p>
                        <p>
                            As I gathered requirements from churches, the problem
                            became larger than file generation. The product needed
                            a clearer workflow, dependable AI-assisted processing,
                            accessible delivery and infrastructure that would stay
                            economical while usage was still uncertain.
                        </p>
                    </section>
                </div>

                <aside className={styles.productMap} aria-label='HymnDeck product journey'>
                    <p className={styles.mapLabel}>One continuous product loop</p>
                    <div className={styles.mapSteps}>
                        <div>
                            <span>01</span>
                            <strong>Observe</strong>
                            <p>A repeated two-hour workflow</p>
                        </div>
                        <span className={styles.arrow} aria-hidden='true'>→</span>
                        <div>
                            <span>02</span>
                            <strong>Prove</strong>
                            <p>An adopted desktop tool</p>
                        </div>
                        <span className={styles.arrow} aria-hidden='true'>→</span>
                        <div>
                            <span>03</span>
                            <strong>Productise</strong>
                            <p>A production B2B SaaS</p>
                        </div>
                    </div>
                </aside>

                <div className={shared.readingColumn}>
                    <section className={shared.section}>
                        <p className={shared.sectionLabel}>Productisation</p>
                        <h2>The prototype became a product</h2>
                        <p>
                            HymnDeck became a web application built around the
                            complete customer journey rather than the original
                            script. I had to decide what belonged in the first
                            release, how a user would recover when automation was
                            imperfect and which parts of the system deserved
                            complexity.
                        </p>
                        <p>
                            The result is a TypeScript and Next.js frontend paired
                            with a Python and FastAPI backend, PostgreSQL, Firebase,
                            Lemon Squeezy, OpenRouter and Google Cloud Platform.
                            The codebase uses a Turborepo setup with a one-command
                            local stack and a four-stage Docker build using uv.
                        </p>

                        <PullQuote>
                            The important shift was not desktop to web. It was tool
                            to product: from automating my understanding of the task
                            to supporting somebody else’s complete workflow.
                        </PullQuote>
                    </section>

                    <section className={shared.section}>
                        <p className={shared.sectionLabel}>Reliability</p>
                        <h2>AI belongs inside a dependable system</h2>
                        <p>
                            A successful demo is not the same thing as dependable
                            automation. The backend coordinates concurrent LLM
                            agents and includes retries and fallbacks so a temporary
                            model failure does not automatically become a failed
                            customer workflow.
                        </p>
                        <p>
                            I also optimised for low operating costs, fast cold
                            starts and infrastructure that can scale without
                            requiring a large platform team. Those constraints
                            shaped the architecture just as much as the product
                            interface did.
                        </p>
                    </section>

                    <section className={shared.section}>
                        <p className={shared.sectionLabel}>Ownership</p>
                        <h2>One product, every layer</h2>
                        <p>
                            I owned the architecture, scope and implementation from
                            end to end: product decisions, interface work, backend
                            services, data, billing, authentication, deployment and
                            operational trade-offs. I used agentic coding tools and
                            isolated Git worktrees to accelerate development while
                            keeping review and architectural decisions under my own
                            control.
                        </p>
                        <p>
                            That breadth is the work I want to keep doing. I am most
                            useful where product thinking and engineering meet:
                            finding the smallest valuable version, shipping across
                            the stack and staying with the system until it works in
                            production.
                        </p>

                        <div className={shared.linkList}>
                            <a
                                className={shared.externalLink}
                                href='https://hymndeck.app/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                Visit HymnDeck <span aria-hidden='true'>↗</span>
                            </a>
                        </div>
                    </section>
                </div>
            </article>

            <ProjectPager
                nextHref='/projects/house-md-chatbot'
                nextTitle='House MD Chatbot'
            />
        </main>
    );
}
