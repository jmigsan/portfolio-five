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
        "How Juan Miguel Sanchez built and evolved a production AI workflow for church worship teams across the web and WhatsApp.",
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
                        Building an AI workflow that meets church teams where they already work.
                    </p>
                    <p className={styles.heroSummary}>
                        Slide generation for people running on empty. HymnDeck
                        turns a song sheet, document or WhatsApp message into the
                        PowerPoint deck a small church already uses.
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
                <video autoPlay loop controls muted playsInline preload='metadata' poster='/hymndeck-demo-poster.webp'>
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
                            Core build: 1 March–1 April · WhatsApp added in August
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
                    <p
                        className={`${shared.sectionLabel} ${shared.embossedLabel} ${shared.tiltLeft}`}
                    >
                        The problem
                    </p>
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
                        <p
                            className={`${shared.sectionLabel} ${shared.embossedLabel} ${shared.tiltRight}`}
                        >
                            Assumptions tested
                        </p>
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
                    <p
                        className={`${shared.sectionLabel} ${shared.embossedLabel} ${shared.tiltSoftLeft}`}
                    >
                        Product decisions
                    </p>
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

                <section
                    id='channels'
                    className={`${styles.channelSection} ${styles.sectionAnchor}`}
                >
                    <div className={styles.channelCopy}>
                        <p
                            className={`${shared.sectionLabel} ${shared.embossedLabel} ${shared.tiltRight}`}
                        >
                            After launch · WhatsApp
                        </p>
                        <h2>Distribution became a product constraint</h2>
                        <p className={styles.channelLead}>
                            The web product removed most of the slide-making work, but it still
                            asked an overloaded worship leader to remember another product.
                        </p>
                        <p>
                            I took the original product principle—fit the workflow already in
                            place—one step further and brought HymnDeck into WhatsApp. A user can
                            send lyrics, images or documents, resolve ambiguous song matches in the
                            conversation, choose a design and receive the finished PowerPoint
                            without keeping a browser session open.
                        </p>
                        <p>
                            This is not a second generation engine. WhatsApp is a new control
                            surface over the same source-grounded agent, deck model and organisation
                            permissions. The web editor remains available when visual control
                            matters; messaging makes the common path easier to start and delegate.
                        </p>
                        <p className={styles.channelCaveat}>
                            The integration is live, but it is too early to claim it solved
                            distribution. It turns the lesson from the first launch into a testable
                            product hypothesis.
                        </p>
                    </div>

                    <MediaFrame
                        className={styles.channelMedia}
                        caption='A request, progress updates and the finished PowerPoint delivered in the conversation.'
                    >
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload='metadata'
                            poster='/hymndeck-whatsapp-demo-poster.webp'
                        >
                            <source src='/hymndeck-whatsapp-demo.mp4' type='video/mp4' />
                            Your browser does not support embedded video.
                        </video>
                    </MediaFrame>
                </section>

                <div className={styles.workflow} aria-label='HymnDeck workflow'>
                    <div>
                        <span>01</span>
                        <strong>Bring the source</strong>
                        <p>Paste, upload or send it through WhatsApp</p>
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
                        <strong>Resolve ambiguity</strong>
                        <p>Use the visual editor or reply in the conversation</p>
                    </div>
                    <span aria-hidden='true'>→</span>
                    <div>
                        <span>04</span>
                        <strong>Receive the deck</strong>
                        <p>Download it on the web or receive it in WhatsApp</p>
                    </div>
                </div>

                <section
                    id='architecture'
                    className={`${styles.architectureSection} ${styles.sectionAnchor}`}
                >
                    <div className={styles.architectureCopy}>
                        <p
                            className={`${styles.inverseLabel} ${shared.embossedLabel} ${shared.tiltSoftRight}`}
                        >
                            Architecture
                        </p>
                        <h2>Serverless by constraint, not by slogan</h2>
                        <p>
                            A Next.js workspace and WhatsApp Cloud API webhook feed
                            the same FastAPI service and shared agent state. Long
                            AI work leaves both request paths through Cloud Tasks,
                            runs in a private Cloud Run worker and returns through
                            either the web application or a durable outbound-message
                            queue.
                        </p>
                    </div>

                    <div
                        className={styles.blueprintSheet}
                        role='img'
                        aria-label='HymnDeck system architecture. A church team supplies lyrics, documents and design intent through the Next.js application or WhatsApp. FastAPI validates and persists the request before long-running generation continues through Cloud Tasks and a private Cloud Run worker. The worker uses Neon, Cloud Storage, OpenRouter, optional Pexels imagery and PowerPoint processing. The finished deck is available in the web editor or delivered through a durable WhatsApp outbox.'
                    >
                        <div className={styles.blueprintHeader} aria-hidden='true'>
                            <span>HymnDeck / system anatomy</span>
                            <span>HD-ARCH-04</span>
                            <span>Rev. 04</span>
                        </div>

                        <div className={styles.blueprintCanvas}>
                            <div className={styles.cloudBoundary} aria-hidden='true'>
                                <span>Google Cloud / runtime boundary</span>
                            </div>

                            <svg
                                className={styles.blueprintWiring}
                                viewBox='0 0 1200 720'
                                preserveAspectRatio='none'
                                aria-hidden='true'
                            >
                                <defs>
                                    <marker
                                        id='blueprint-arrow-white'
                                        viewBox='0 0 10 10'
                                        refX='8'
                                        refY='5'
                                        markerWidth='6'
                                        markerHeight='6'
                                        orient='auto-start-reverse'
                                    >
                                        <path d='M 0 0 L 10 5 L 0 10 z' fill='#f4f2e9' />
                                    </marker>
                                    <marker
                                        id='blueprint-arrow-gold'
                                        viewBox='0 0 10 10'
                                        refX='8'
                                        refY='5'
                                        markerWidth='6'
                                        markerHeight='6'
                                        orient='auto-start-reverse'
                                    >
                                        <path d='M 0 0 L 10 5 L 0 10 z' fill='#f2c450' />
                                    </marker>
                                </defs>

                                <path className={styles.requestWire} d='M 144 165 C 180 165 170 238 218 238' />
                                <path className={styles.requestWire} d='M 390 245 C 424 245 415 172 456 172' />
                                <path className={styles.asyncWire} d='M 625 210 C 654 254 642 338 682 366' />
                                <path className={styles.asyncWire} d='M 810 400 C 842 400 836 332 872 332' />
                                <path className={styles.outputWire} d='M 1037 379 C 1078 404 1048 491 1080 518' />
                                <path className={styles.returnWire} d='M 1128 594 C 1114 676 379 686 316 318' />

                                <path className={styles.serviceWire} d='M 144 435 C 178 414 212 350 249 303' />
                                <path className={styles.serviceWire} d='M 333 554 C 332 475 335 348 331 306' />
                                <path className={styles.serviceWire} d='M 558 74 L 558 106' />
                                <path className={styles.serviceWire} d='M 642 112 C 650 196 721 240 743 338' />
                                <path className={styles.serviceWire} d='M 893 117 C 903 180 938 231 951 286' />
                                <path className={styles.optionalWire} d='M 1033 176 C 1014 214 1001 252 985 287' />
                                <path className={styles.serviceWire} d='M 505 604 C 521 493 520 320 532 222' />
                                <path
                                    className={styles.serviceWire}
                                    d='M 744 630 C 852 662 1018 654 1086 594'
                                />
                            </svg>

                            <ol className={styles.blueprintRoute}>
                                <li className={`${styles.blueprintStage} ${styles.stageUser}`}>
                                    <span className={styles.stageNumber}>01</span>
                                    <span className={styles.stageKind}>Input</span>
                                    <strong>Church team</strong>
                                    <small>Lyrics, documents and design intent</small>
                                    <em>start with what they already use</em>
                                </li>
                                <li className={`${styles.blueprintStage} ${styles.stageWeb}`}>
                                    <span className={styles.stageNumber}>02</span>
                                    <span className={styles.stageKind}>Control surfaces</span>
                                    <strong>Web + WhatsApp</strong>
                                    <small>Next.js workspace / Meta webhooks</small>
                                    <em>sign in, message or review</em>
                                </li>
                                <li className={`${styles.blueprintStage} ${styles.stageApi}`}>
                                    <span className={styles.stageNumber}>03</span>
                                    <span className={styles.stageKind}>Public service</span>
                                    <strong>FastAPI</strong>
                                    <small>Cloud Run / Python / Uvicorn</small>
                                    <em>validate, persist, respond</em>
                                </li>
                                <li className={`${styles.blueprintStage} ${styles.stageTasks}`}>
                                    <span className={styles.stageNumber}>04</span>
                                    <span className={styles.stageKind}>Queue</span>
                                    <strong>Cloud Tasks</strong>
                                    <small>Authenticated task delivery</small>
                                    <em>the request can end here</em>
                                </li>
                                <li className={`${styles.blueprintStage} ${styles.stageWorker}`}>
                                    <span className={styles.stageNumber}>05</span>
                                    <span className={styles.stageKind}>Private service</span>
                                    <strong>Agent worker</strong>
                                    <small>AI orchestration + document tooling</small>
                                    <em>no public ingress</em>
                                </li>
                                <li className={`${styles.blueprintStage} ${styles.stageDeck}`}>
                                    <span className={styles.stageNumber}>06</span>
                                    <span className={styles.stageKind}>Delivery</span>
                                    <strong>.pptx + preview</strong>
                                    <small>web download / WhatsApp document</small>
                                    <em>durable outbox + signed fallback</em>
                                </li>
                            </ol>

                            <div className={styles.blueprintServices} aria-label='Supporting systems'>
                                <div className={`${styles.systemNote} ${styles.noteDrive}`}>
                                    <span>Source material</span>
                                    <strong>Google Drive + Docs</strong>
                                    <small>OAuth / Picker API</small>
                                </div>
                                <div className={`${styles.systemNote} ${styles.noteFirebase}`}>
                                    <span>Identity</span>
                                    <strong>Firebase Auth</strong>
                                    <small>token issued + verified</small>
                                </div>
                                <div className={`${styles.systemNote} ${styles.noteDatabase}`}>
                                    <span>Shared state</span>
                                    <strong>Neon Postgres</strong>
                                    <small>SQLAlchemy async</small>
                                </div>
                                <div className={`${styles.systemNote} ${styles.noteStorage}`}>
                                    <span>Large files</span>
                                    <strong>Cloud Storage</strong>
                                    <small>uploads + generated assets</small>
                                </div>
                                <div className={`${styles.systemNote} ${styles.noteAi}`}>
                                    <span>Model gateway</span>
                                    <strong>OpenRouter</strong>
                                    <small>Gemini formatter / GPT-5.6 Luna agent</small>
                                </div>
                                <div className={`${styles.systemNote} ${styles.noteWhatsApp}`}>
                                    <span>Messaging</span>
                                    <strong>WhatsApp Cloud API</strong>
                                    <small>webhooks / media / delivery status</small>
                                </div>
                                <div className={`${styles.systemNote} ${styles.notePexels}`}>
                                    <span>Optional imagery</span>
                                    <strong>Pexels</strong>
                                    <small>licensed stock-image search</small>
                                </div>
                                <div className={`${styles.systemNote} ${styles.noteBilling}`}>
                                    <span>Commercial</span>
                                    <strong>Lemon Squeezy</strong>
                                    <small>checkout + subscriptions</small>
                                </div>
                            </div>

                            <p className={styles.splitAnnotation} aria-hidden='true'>
                                long work leaves<br />the request path
                            </p>
                            <p className={styles.returnAnnotation} aria-hidden='true'>
                                07 / stream or message status, preview, deliver
                            </p>
                        </div>

                        <div className={styles.blueprintLegend} aria-hidden='true'>
                            <span><i className={styles.legendRequest} /> direct request</span>
                            <span><i className={styles.legendAsync} /> queued work</span>
                            <span><i className={styles.legendOptional} /> optional integration</span>
                            <b>Measured for real weekly use</b>
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
                                    SQLAlchemy 2 async, asyncpg, Alembic, channel
                                    identities, agent sessions, a database-backed
                                    delivery outbox, Neon PostgreSQL and in-memory
                                    SQLite tests.
                                </p>
                            </div>
                            <div>
                                <h3>Infrastructure</h3>
                                <p>
                                    Public and private Cloud Run services, Cloud
                                    Tasks, Cloud Storage, IAM service accounts,
                                    Secret Manager, Firebase Auth and Admin SDK,
                                    Google OAuth, Meta Graph and WhatsApp Cloud APIs,
                                    Docker multi-stage builds, uv and gcloud.
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
                        <p
                            className={`${shared.sectionLabel} ${shared.embossedLabel} ${shared.tiltRight}`}
                        >
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
                            <p
                                className={`${styles.challengeKicker} ${shared.embossedLabel} ${shared.tiltSoftLeft}`}
                            >
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
                                I compared GLM 5, Kimi K2.5, Gemini 2.5 Flash,
                                Gemini 3 Flash and MiniMax M3 on representative
                                HymnDeck tasks. That exposed a weakness in comparing
                                models by token price and latency alone: less capable
                                agents sometimes produced malformed tool calls or needed
                                several attempts to complete one operation.
                            </p>
                            <p>
                                I reduced the initial tool surface to a small set of core
                                capabilities, allowing the agent to activate additional
                                tool groups only when the workflow requires them. I then
                                moved the web and WhatsApp agent to GPT-5.6 Luna. Its
                                lower price and better first-pass tool reliability made
                                it cheaper per completed task—not merely cheaper per
                                token. Gemini 3 Flash remains the constrained formatter.
                            </p>
                            <p>
                                Automated tests cover tool schemas, invalid arguments,
                                permissions, source requirements, wording preservation,
                                provenance, confirmation, failures and observability
                                redaction. A scored model-evaluation dataset remains the
                                clearest testing gap.
                            </p>
                        </div>
                    </article>

                    <article className={styles.challenge}>
                        <div className={styles.challengeNumber}>02</div>
                        <div className={styles.challengeBody}>
                            <p
                                className={`${styles.challengeKicker} ${shared.embossedLabel} ${shared.tiltLeft}`}
                            >
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
                            <p
                                className={`${styles.challengeKicker} ${shared.embossedLabel} ${shared.tiltSoftRight}`}
                            >
                                Conversational reliability
                            </p>
                            <h3>Make slow AI feel native inside messaging</h3>
                            <p className={styles.challengeLead}>
                                A webhook can be retried, a model can time out and the
                                user can send another message while both are happening.
                                The conversation still has to make sense.
                            </p>
                            <p>
                                Signed Meta webhooks are verified and normalised into durable
                                records, then Cloud Tasks carries long-running work
                                to a private worker. Provider message IDs,
                                task-identity checks and
                                commit-visibility retries make retried webhook delivery safe.
                                Persisted agent sessions preserve reply context, while newer
                                requests can supersede stale runs. Typing indicators and bounded
                                working-status messages make progress visible without pretending
                                generation is instantaneous.
                            </p>
                            <p>
                                Results leave through a database-backed delivery outbox with leases,
                                retries and delivery receipts. The dispatcher respects WhatsApp’s
                                customer-service window and can notify the user through a
                                configured, approved template when direct delivery is blocked.
                                Otherwise it waits for the next inbound message to reopen the
                                window. A PowerPoint that is too large for direct media delivery
                                falls back to a signed download. Model calls, tool calls
                                and wall-clock duration are bounded so a stuck run can
                                reach an honest terminal state.
                            </p>
                        </div>
                    </article>
                </section>

                <section className={styles.operationsSection}>
                    <div className={styles.operationCard}>
                        <p
                            className={`${shared.sectionLabel} ${shared.embossedLabel} ${shared.tiltSoftLeft}`}
                        >
                            Other people’s content
                        </p>
                        <h2>Hold little. Invent nothing.</h2>
                        <p>
                            The model only formats material supplied by the user;
                            it never fills lyrics from training data. Transient source
                            files are normally removed
                            from active storage after about 48 hours and message content after about
                            seven days; operational records retain only what is needed to recover
                            and audit delivery. The generated deck structure persists
                            for the life of the account because deleting somebody’s
                            slides after 30 days would be hostile.
                        </p>
                        <p>
                            Customer content is scoped to the authenticated organisation. WhatsApp
                            identities are connected through expiring, single-use tokens and
                            relinking archives old conversational context before trust scope
                            changes. Drive imports are restricted, URLs are
                            allowlisted, and verbose model traces are off by
                            default with unsafe values redacted during debugging.
                        </p>
                    </div>
                    <div className={styles.operationCard}>
                        <p
                            className={`${shared.sectionLabel} ${shared.embossedLabel} ${shared.tiltRight}`}
                        >
                            Production work
                        </p>
                        <h2>The work nobody demos</h2>
                        <p>
                            Two Cloud Run services are deployed separately, with
                            the worker private and reachable only through
                            authenticated Cloud Tasks. Ordered Alembic migrations
                            cover the initial schema, billing, multiple designs,
                            background jobs, agent sessions, asset provenance,
                            channel identities, delivery state, export snapshots and
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
                        <p
                            className={`${styles.inverseLabel} ${shared.embossedLabel} ${shared.tiltLeft}`}
                        >
                            Results, honestly
                        </p>
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
                            to keep it alive. WhatsApp is now live as a second way
                            into the same workflow; there is not yet enough usage to
                            claim it changed adoption.
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
                    <p
                        className={`${shared.sectionLabel} ${shared.embossedLabel} ${shared.tiltSoftRight}`}
                    >
                        What I would do differently
                    </p>
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
                    <p
                        className={`${styles.closingKicker} ${shared.embossedLabel} ${shared.tiltSoftLeft}`}
                    >
                        What this is evidence of
                    </p>
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
