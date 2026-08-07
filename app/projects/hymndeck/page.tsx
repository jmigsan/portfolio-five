import type { Metadata } from "next";
import DirectionalLink from "../../components/DirectionalLink";
import {
    MediaFrame,
    ProjectFact,
    ProjectFacts,
    ProjectPager,
    PullQuote,
} from "../_components/CaseStudyElements";
import shared from "../_components/case-study.module.css";
import CaseStudyIndex from "./CaseStudyIndex";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "HymnDeck | Juan Miguel Sanchez",
    description:
        "How Juan Miguel Sanchez built and launched a production AI workflow for church worship teams — from customer research to infrastructure and support.",
};

const assumptions = [
    {
        verdict: "Held up",
        tone: "positive",
        title: "Slide preparation was the bottleneck",
        detail: "The repetitive formatting work, rather than choosing songs, was consuming the time.",
    },
    {
        verdict: "Wrong",
        tone: "negative",
        title: "Lyrics lived in one master document",
        detail: "Some churches used folders of old PowerPoints as their source of truth.",
    },
    {
        verdict: "Wrong",
        tone: "negative",
        title: "Users would trust the output unseen",
        detail: "They wanted to review everything, which made a full slide editor essential.",
    },
    {
        verdict: "Broadly held",
        tone: "positive",
        title: "Difficulty stopped people switching",
        detail: "Workflow migration was a bigger obstacle than missing presentation features.",
    },
    {
        verdict: "Partly held",
        tone: "neutral",
        title: "The worship leader was the buyer",
        detail: "The user and problem were clear; who would actually pay was not validated.",
    },
    {
        verdict: "Unproven",
        tone: "neutral",
        title: "This was a paid product",
        detail: "Billing went live, but nobody converted from the free tier.",
    },
] as const;

export default function HymnDeckCaseStudy() {
    return (
        <main className={`${shared.caseStudy} ${styles.page}`}>
            <header className={`${shared.hero} ${styles.hero}`}>
                <div className={styles.heroGrid} aria-hidden='true' />
                <div className={styles.heroInner}>
                    <div className={styles.heroTopline}>
                        <p className={shared.eyebrow}>
                            Case study · Product engineering
                        </p>
                        <span className={styles.liveBadge}>
                            <span className={styles.liveDot} aria-hidden='true' />
                            <span className={styles.liveLabel}>Live in production</span>
                        </span>
                    </div>
                    <h1>HymnDeck</h1>
                    <p className={styles.heroStatement}>
                        Building and launching a B2B AI automation SaaS from zero
                        to production.
                    </p>
                    <p className={styles.heroSummary}>
                        Slide generation for people running on empty. HymnDeck
                        turns the song sheet a small church already writes into
                        the PowerPoint deck it already uses.
                    </p>
                    <div className={styles.heroActions}>
                        <a
                            className={styles.primaryAction}
                            href='https://hymndeck.app/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Visit HymnDeck <span aria-hidden='true'>↗</span>
                        </a>
                        <a className={styles.textAction} href='#story'>
                            Read the case study <span aria-hidden='true'>↓</span>
                        </a>
                    </div>
                </div>
            </header>

            <CaseStudyIndex />

            <MediaFrame
                wide
                className={styles.introMedia}
                caption='From a plain-language request to an editable, downloadable PowerPoint deck.'
            >
                <video controls muted playsInline preload='metadata' poster='/hymndeck-demo-poster.webp'>
                    <source src='/hymndeck-demo.mp4' type='video/mp4' />
                    Your browser does not support embedded video.
                </video>
            </MediaFrame>

            <article
                id='story'
                className={`${shared.articleBody} ${styles.sectionAnchor}`}
            >
                <div className={shared.readingColumn}>
                    <p className={shared.standfirst}>
                        I owned HymnDeck end to end: customer workflows,
                        application architecture, AI orchestration, billing,
                        infrastructure, deployment and production support. Every
                        decision in this case study is one I made—and then had to
                        live with.
                    </p>

                    <ProjectFacts>
                        <ProjectFact label='Role'>
                            Founder and sole product engineer
                        </ProjectFact>
                        <ProjectFact label='Timeline'>
                            Core build: 1 March–1 April · iterated after launch
                        </ProjectFact>
                        <ProjectFact label='Users'>
                            Two churches weekly at peak
                        </ProjectFact>
                        <ProjectFact label='Status'>
                            Live · near-zero running cost
                        </ProjectFact>
                    </ProjectFacts>
                </div>

                <section
                    id='problem'
                    className={`${shared.section} ${shared.readingColumn} ${styles.sectionAnchor}`}
                >
                    <p className={shared.sectionLabel}>The problem</p>
                    <h2>The capable person gets every job</h2>
                    <p>
                        The person I built for is a worship leader at a church of
                        20–150 people who is already doing four other jobs on a
                        Sunday. Worship, tech, rehearsals, song sheets, AV and
                        slides often land with the same person because they are the
                        most capable person available—which is exactly why nobody
                        takes the work off them.
                    </p>
                    <p>
                        They write a song sheet, turn it into slides, then change
                        the arrangement: a verse gets cut, a chorus gets doubled or
                        the song is abridged the night before. Last week’s deck can
                        no longer be reused. In a larger church the AV team absorbs
                        the work in 15–20 minutes. In a small church it takes the
                        worship leader about an hour, or two to three when the
                        operator is less confident or the design is elaborate.
                    </p>

                    <PullQuote>
                        The cost was not only time. Someone who spent Saturday
                        night fighting text boxes was not fully present when they
                        led on Sunday morning.
                    </PullQuote>

                    <p>
                        Delegation did not work because teaching the slide system
                        was another task for someone with no spare tasks. Existing
                        worship presentation platforms were not short of features;
                        migrating a decade-old workflow was simply a big,
                        low-urgency project competing with things on fire that
                        week. The intervention had to fit the workflow already in
                        place: accept the song sheet they already write and return
                        the PowerPoint they already use.
                    </p>
                    <p>
                        My first prototype was a deterministic parser. It worked
                        for my church because users defined their own slide
                        delimiters, then fell over at the second church. Lyric
                        formatting is home-grown and inconsistent. A language
                        model could absorb that variation without making users
                        learn a new syntax, while a chat interface removed the last
                        technical step.
                    </p>
                </section>

                <aside className={styles.impactRail} aria-label='Workflow impact'>
                    <div>
                        <span className={styles.impactNumber}>1-3 hrs</span>
                        <span className={styles.impactLabel}>old workflow</span>
                    </div>
                    <span className={styles.impactArrow} aria-hidden='true'>
                        →
                    </span>
                    <div>
                        <span className={styles.impactNumber}>10 mins</span>
                        <span className={styles.impactLabel}>with HymnDeck</span>
                    </div>
                    <p>
                        One recurring job made small enough to hand to somebody
                        else.
                    </p>
                </aside>

                <section className={styles.assumptionsSection}>
                    <div className={styles.sectionIntro}>
                        <p className={shared.sectionLabel}>Assumptions tested</p>
                        <h2>Reality edited the roadmap</h2>
                        <p>
                            The useful discoveries were not all confirmations.
                            Several wrong assumptions directly reshaped the
                            product.
                        </p>
                    </div>
                    <div className={styles.assumptionGrid}>
                        {assumptions.map((assumption, index) => (
                            <article
                                className={styles.assumptionCard}
                                key={assumption.title}
                            >
                                <div className={styles.cardTopline}>
                                    <span>0{index + 1}</span>
                                    <span
                                        className={`${styles.verdict} ${styles[assumption.tone]}`}
                                    >
                                        {assumption.verdict}
                                    </span>
                                </div>
                                <h3>{assumption.title}</h3>
                                <p>{assumption.detail}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section
                    id='product'
                    className={`${shared.section} ${shared.readingColumn} ${styles.sectionAnchor}`}
                >
                    <p className={shared.sectionLabel}>Product decisions</p>
                    <h2>Automate the expensive part. Keep humans in control.</h2>
                    <p>
                        I started with song-sheet-to-PowerPoint because every user
                        did it every week, it cost an hour on average and up to
                        three at the tail, and it produced an artefact they already
                        understood. Nothing else in their week had that shape.
                    </p>

                    <div className={styles.decisionList}>
                        <article>
                            <span>01</span>
                            <div>
                                <h3>Cut attractive distractions</h3>
                                <p>
                                    I left out sermon slides despite demand. I did
                                    not have the domain knowledge or a validated
                                    buyer, and generic text-to-slides sat directly
                                    in the path of ChatGPT and Gemini. Song slides
                                    had libraries, recurring formatting and
                                    arrangement quirks that rewarded specialisation.
                                    I also cut agentic slide design because I did
                                    not yet trust models with unsupervised aesthetic
                                    decisions.
                                </p>
                            </div>
                        </article>
                        <article>
                            <span>02</span>
                            <div>
                                <h3>Follow the source of truth</h3>
                                <p>
                                    I assumed every church kept one master Word
                                    document. After launch, I found churches that
                                    rehearsed from folders of old PowerPoints. That
                                    feedback created a PowerPoint-folder import path
                                    and the hardest engineering problem in the
                                    project.
                                </p>
                            </div>
                        </article>
                        <article>
                            <span>03</span>
                            <div>
                                <h3>Make review a feature</h3>
                                <p>
                                    Users land in a block-based slide editor with
                                    control over lyrics, positioning and design. I
                                    was dogfooding HymnDeck for my own church and
                                    knew that silently changing a lyric was
                                    unacceptable. The model proposes; the user can
                                    inspect and correct.
                                </p>
                            </div>
                        </article>
                        <article>
                            <span>04</span>
                            <div>
                                <h3>Teach by getting out of the way</h3>
                                <p>
                                    The first screen uses a familiar chat interface
                                    with an example of exactly what to paste. A
                                    30-second explainer can expand or disappear. I
                                    repeatedly ran silent demos, watched where
                                    people hesitated and rewrote the opening flow
                                    around those moments.
                                </p>
                            </div>
                        </article>
                    </div>
                </section>

                <div className={styles.workflow} aria-label='HymnDeck workflow'>
                    <div>
                        <span>01</span>
                        <strong>Bring the source</strong>
                        <p>Song sheet, document or PowerPoint library</p>
                    </div>
                    <span aria-hidden='true'>→</span>
                    <div>
                        <span>02</span>
                        <strong>Generate safely</strong>
                        <p>Structured AI tools with source constraints</p>
                    </div>
                    <span aria-hidden='true'>→</span>
                    <div>
                        <span>03</span>
                        <strong>Review visually</strong>
                        <p>Edit lyrics, layout, media and design</p>
                    </div>
                    <span aria-hidden='true'>→</span>
                    <div>
                        <span>04</span>
                        <strong>Use the output</strong>
                        <p>Download the PowerPoint the church already knows</p>
                    </div>
                </div>

                <section
                    id='architecture'
                    className={`${styles.architectureSection} ${styles.sectionAnchor}`}
                >
                    <div className={styles.architectureCopy}>
                        <p className={styles.inverseLabel}>Architecture</p>
                        <h2>Serverless by constraint, not by slogan</h2>
                        <p>
                            A Turborepo monorepo pairs a Next.js frontend with a
                            FastAPI backend in Docker on Cloud Run and Neon
                            PostgreSQL over async SQLAlchemy. Long-running AI work
                            leaves the request path through Cloud Tasks and runs in
                            a private Cloud Run worker.
                        </p>
                    </div>

                    <div
                        className={styles.systemMap}
                        role='img'
                        aria-label='HymnDeck system architecture: a church user interacts with the Next.js web application, which connects to Firebase authentication, Google Drive and a FastAPI service. The API uses Neon, Cloud Storage, PowerPoint processing, OpenRouter and Lemon Squeezy, and sends long jobs through Cloud Tasks to a private worker.'
                    >
                        <div className={`${styles.systemNode} ${styles.userNode}`}>
                            <span>USER</span>
                            <strong>Church team</strong>
                        </div>
                        <span className={styles.mapArrow} aria-hidden='true'>→</span>
                        <div className={`${styles.systemNode} ${styles.webNode}`}>
                            <span>WEB</span>
                            <strong>Next.js 16</strong>
                            <small>React 19 · TypeScript</small>
                        </div>
                        <span className={styles.mapArrow} aria-hidden='true'>→</span>
                        <div className={`${styles.systemNode} ${styles.apiNode}`}>
                            <span>PUBLIC SERVICE</span>
                            <strong>FastAPI</strong>
                            <small>Cloud Run · Docker</small>
                        </div>
                        <span className={styles.mapArrow} aria-hidden='true'>→</span>
                        <div className={`${styles.systemNode} ${styles.taskNode}`}>
                            <span>QUEUE</span>
                            <strong>Cloud Tasks</strong>
                            <small>Authenticated delivery</small>
                        </div>
                        <span className={styles.mapArrow} aria-hidden='true'>→</span>
                        <div className={`${styles.systemNode} ${styles.workerNode}`}>
                            <span>PRIVATE SERVICE</span>
                            <strong>AI worker</strong>
                            <small>Durable agent jobs</small>
                        </div>
                        <div className={styles.serviceRow}>
                            <div>Firebase Auth</div>
                            <div>Google Drive</div>
                            <div>Neon Postgres</div>
                            <div>Cloud Storage</div>
                            <div>OpenRouter</div>
                            <div>PowerPoint tools</div>
                            <div>Pexels</div>
                            <div>Lemon Squeezy</div>
                        </div>
                    </div>

                    <details className={styles.techDetails}>
                        <summary>Explore the full technology stack</summary>
                        <div className={styles.techGrid}>
                            <div>
                                <h3>Frontend</h3>
                                <p>
                                    Next.js 16, React 19, TypeScript, Turborepo,
                                    Bun workspaces, Tailwind CSS 4, Zustand, Framer
                                    Motion, Konva, React-Konva, dnd-kit, Firebase,
                                    next-themes, React Dropzone, React Markdown,
                                    Remark GFM, react-colorful and JSZip.
                                </p>
                            </div>
                            <div>
                                <h3>Backend and data</h3>
                                <p>
                                    Python 3.14, FastAPI, Uvicorn, Pydantic,
                                    SQLAlchemy 2 async, asyncpg, Alembic,
                                    python-multipart, HTTP bearer authentication,
                                    Neon PostgreSQL and in-memory SQLite tests.
                                </p>
                            </div>
                            <div>
                                <h3>Infrastructure</h3>
                                <p>
                                    Public and private Cloud Run services, Cloud
                                    Tasks, Cloud Storage, IAM service accounts,
                                    Secret Manager, Firebase Auth and Admin SDK,
                                    Google OAuth, Docker multi-stage builds, uv and
                                    gcloud.
                                </p>
                            </div>
                            <div>
                                <h3>AI and documents</h3>
                                <p>
                                    OpenRouter through the OpenAI Python SDK,
                                    configurable vision and tool-calling models,
                                    persisted agent activity, python-pptx, OOXML,
                                    LibreOffice, Poppler, Pillow, python-docx,
                                    pypdf, ZIP/XML inspection and bundled fonts.
                                </p>
                            </div>
                        </div>
                    </details>
                </section>

                <section
                    id='engineering'
                    className={`${styles.engineeringSection} ${styles.sectionAnchor}`}
                >
                    <div className={styles.sectionIntro}>
                        <p className={shared.sectionLabel}>
                            Three engineering problems
                        </p>
                        <h2>The parts worth writing about</h2>
                        <p>
                            The difficult work was not producing a good demo. It
                            was putting unreliable inputs and probabilistic models
                            inside a workflow people could depend on every week.
                        </p>
                    </div>

                    <article className={styles.challenge}>
                        <div className={styles.challengeNumber}>01</div>
                        <div className={styles.challengeBody}>
                            <p className={styles.challengeKicker}>
                                Constrained AI
                            </p>
                            <h3>
                                Make a probabilistic component behave predictably
                            </h3>
                            <p className={styles.challengeLead}>
                                The problem was never getting a good answer from a
                                model. It was guaranteeing the model could not do
                                something unacceptable.
                            </p>
                            <p>
                                Silently altering a lyric is unacceptable in
                                worship software, so I treated hallucination as an
                                authorisation problem. The model never touches the
                                database or PowerPoint file. It selects typed tools
                                whose Pydantic arguments become OpenRouter function
                                schemas; unknown arguments are rejected before
                                execution.
                            </p>
                            <p>
                                Server-side rules require an authorised source for
                                lyric changes, flag wording absent from uploaded
                                material, scope tools by organisation and design,
                                and require confirmation for higher-impact or
                                shared mutations. Draft and committed decks are
                                separate objects, so proposing and persisting are
                                distinct steps and users review ambiguous matches.
                            </p>
                            <p>
                                I tested GLM 5, Kimi K2.5, Gemini 2.5 Flash,
                                Gemini 3 Flash and MiniMax M3 against cost and
                                latency. Gemini 3 Flash won the constrained
                                formatter role; MiniMax M3 with thinking enabled
                                won the agentic chatbot role. Tests cover tool
                                schemas, invalid arguments, permissions, source
                                requirements, wording preservation, provenance,
                                confirmation, failures and observability redaction.
                                A scored evaluation dataset remains the clearest
                                testing gap.
                            </p>
                        </div>
                    </article>

                    <article className={styles.challenge}>
                        <div className={styles.challengeNumber}>02</div>
                        <div className={styles.challengeBody}>
                            <p className={styles.challengeKicker}>
                                Real-world files
                            </p>
                            <h3>Ingest messy PowerPoint libraries in Cloud Run</h3>
                            <p className={styles.challengeLead}>
                                A folder of old presentations turned a text-parsing
                                feature into a file-infrastructure problem.
                            </p>
                            <p>
                                Formatting varied too widely for a deterministic
                                lyric extractor, so the system reads PowerPoint XML
                                with a language model. Older files are converted by
                                headless LibreOffice. Parallel conversion was
                                unreliable in the container, so I serialised that
                                stage and accepted latency in exchange for
                                dependable completion.
                            </p>
                            <p>
                                Uploads went through three versions: asking users
                                to make ZIP files; packaging selected folders in
                                the browser with JSZip and no compression; then,
                                when larger libraries hit Cloud Run’s 32 MiB
                                request limit, transferring files directly to
                                Cloud Storage through signed URLs while the API
                                handled metadata only.
                            </p>
                        </div>
                    </article>

                    <article className={styles.challenge}>
                        <div className={styles.challengeNumber}>03</div>
                        <div className={styles.challengeBody}>
                            <p className={styles.challengeKicker}>Durable work</p>
                            <h3>Build background jobs that survive failure</h3>
                            <p className={styles.challengeLead}>
                                AI generation is too slow and failure-prone to live
                                inside one HTTP request, so it does not.
                            </p>
                            <p>
                                The API enqueues a Cloud Task that makes an
                                authenticated request to a private Cloud Run worker.
                                Job state persists in PostgreSQL through queued,
                                running, processing, saving, completed, failed and
                                cancelled states. Work survives request termination,
                                container restarts, model failures and partial
                                processing.
                            </p>
                            <p>
                                Duplicate delivery is handled, abandoned jobs are
                                identifiable, and the frontend streams agent
                                activity so users see progress rather than a
                                spinner. Model calls, tool calls and wall-clock
                                duration are all bounded.
                            </p>
                        </div>
                    </article>
                </section>

                <section className={styles.operationsSection}>
                    <div className={styles.operationCard}>
                        <p className={shared.sectionLabel}>
                            Other people’s content
                        </p>
                        <h2>Hold little. Invent nothing.</h2>
                        <p>
                            The model only formats material supplied by the user;
                            it never fills lyrics from training data. Uploads are
                            not retained. The generated deck structure persists
                            for the life of the account because deleting somebody’s
                            slides after 30 days would be hostile. The only output
                            is a downloaded <code>.pptx</code>; HymnDeck publishes
                            or shares nothing.
                        </p>
                        <p>
                            Customer content is scoped to the authenticated
                            organisation, Drive imports are restricted, URLs are
                            allowlisted, and verbose model traces are off by
                            default with unsafe values redacted during debugging.
                            A takedown request would be straightforward to honour.
                        </p>
                    </div>
                    <div className={styles.operationCard}>
                        <p className={shared.sectionLabel}>Production work</p>
                        <h2>The work nobody demos</h2>
                        <p>
                            Two Cloud Run services are deployed separately, with
                            the worker private and reachable only through
                            authenticated Cloud Tasks. Ordered Alembic migrations
                            cover the initial schema, billing, multiple designs,
                            background jobs, agent sessions, asset provenance and
                            legacy data removal.
                        </p>
                        <p>
                            Secrets arrive through Secret Manager rather than the
                            image. Warm-up logic covers Cloud Run, Neon, Firebase
                            and the model client so the first request of the week is
                            not the slow one. Persisted runs, model requests, tool
                            calls and durations provide application-level
                            observability; proper alerting would come before scale.
                        </p>
                    </div>
                </section>

                <section
                    id='results'
                    className={`${styles.resultsSection} ${styles.sectionAnchor}`}
                >
                    <div className={styles.resultsHeader}>
                        <p className={styles.inverseLabel}>Results, honestly</p>
                        <h2>Useful product. Real users. No commercial traction.</h2>
                    </div>
                    <div className={styles.resultsGrid}>
                        <div>
                            <strong>2</strong>
                            <span>churches using it weekly at peak</span>
                        </div>
                        <div>
                            <strong>1</strong>
                            <span>still using it every week</span>
                        </div>
                        <div>
                            <strong>Near £0</strong>
                            <span>running cost at current serverless usage</span>
                        </div>
                        <div>
                            <strong>0</strong>
                            <span>customers converted from free to paid</span>
                        </div>
                    </div>
                    <div className={styles.resultsCopy}>
                        <p>
                            One church closed; the other still uses HymnDeck every
                            week. A workflow that took about an hour—and up to three
                            at the worst end—now takes minutes. The product has run
                            in production since April without manual intervention
                            to keep it alive.
                        </p>
                        <p>
                            Billing was built, live and integrated, but nobody
                            converted from the free tier. I under-tested willingness
                            to pay and built a system whose engineering depth outran
                            its distribution. Product risk, technical risk and
                            distribution risk are different things; they need
                            testing in a different order than the one I chose.
                        </p>
                    </div>
                </section>

                <section
                    id='lessons'
                    className={`${shared.section} ${shared.readingColumn} ${styles.sectionAnchor}`}
                >
                    <p className={shared.sectionLabel}>What I would do differently</p>
                    <h2>Review the intent, not only the code</h2>
                    <p>
                        I built HymnDeck largely through agentic coding. The
                        failure mode was rarely broken code; it was code that
                        missed the intent. A chatbot bug would prompt a
                        hyper-specific new tool instead of a better prompt using
                        existing primitives. Architecture suggestions quietly
                        depended on Cloud Run at <code>min-instances: 1</code>,
                        discarding the serverless economics. Parsers handled the
                        examples I supplied and nothing beyond them.
                    </p>
                    <p>
                        Reading a diff for product intent—not just correctness—was
                        the highest-leverage habit I developed. Given another
                        month, I would also make the system friendlier to newer
                        agentic models. Worship leaders need slides that are
                        consistent and pleasant, not bespoke; a fast agentic
                        designer can now reasonably own more of that work.
                    </p>
                    <p>
                        Working alone made me quick and made me sloppy. I spent too
                        little time on architecture up front, context-switched
                        across product, frontend, backend, infrastructure and
                        support, and let scope creep arrive without anyone asking
                        why. On a team I would introduce lightweight design reviews
                        early—especially around retries and tenant isolation—and go
                        deeper in one area rather than shallow across all of them.
                    </p>
                </section>

                <section className={styles.closingSection}>
                    <p className={styles.closingKicker}>What this is evidence of</p>
                    <h2>
                        I know what shipping costs because I have owned what
                        happened after launch.
                    </h2>
                    <p>
                        I have done the messy end-to-end work of turning an AI
                        product idea into functioning production software: product
                        decisions, wrong assumptions, failure cases, deployment,
                        users and ongoing responsibility. I am an early-career
                        engineer who can contribute where product thinking,
                        application engineering and AI-enabled systems meet.
                    </p>
                    <div className={styles.closingActions}>
                        <DirectionalLink href='/contact' direction='right'>
                            Contact me to turn your workflow into an MVP
                            <b aria-hidden='true'>←</b>
                        </DirectionalLink>
                        <a href='/Juan Miguel Sanchez CV.pdf'>
                            View my CV
                            <b aria-hidden='true'>↗</b>
                        </a>
                    </div>
                </section>
            </article>

            <ProjectPager
                nextHref='/projects/house-md-chatbot'
                nextTitle='House MD Chatbot'
            />
        </main>
    );
}
