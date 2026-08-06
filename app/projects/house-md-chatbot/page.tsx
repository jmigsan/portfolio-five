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
    title: "House MD Chatbot | Juan Miguel Sanchez",
    description:
        "A full-stack LLM experiment combining model fine-tuning, retrieval and production deployment.",
};

export default function HouseMdChatbotCaseStudy() {
    return (
        <main className={`${shared.caseStudy} ${styles.page}`}>
            <header className={`${shared.hero} ${shared.readingColumn}`}>
                <p className={shared.eyebrow}>Case study · Applied AI</p>
                <h1>
                    <span className={shared.titleLine}>House MD</span>
                    <span className={shared.titleLine}>Chatbot</span>
                </h1>
                <p className={shared.tagline}>
                    Fine-tuning, retrieval and private inference brought together
                    as one complete application.
                </p>
            </header>

            <MediaFrame
                wide
                caption='A working interface for the fine-tuned model and retrieval pipeline.'
            >
                <video controls muted playsInline preload='metadata'>
                    <source src='/house-demo.mp4' type='video/mp4' />
                    Your browser does not support embedded video.
                </video>
            </MediaFrame>

            <article className={`${shared.articleBody} ${shared.readingColumn}`}>
                <p className={shared.standfirst}>
                    This project was an exercise in building the whole LLM system,
                    not wrapping a chat interface around a hosted model. I prepared
                    the training data, fine-tuned an open model, built a retrieval
                    pipeline and deployed each application layer to the platform
                    that suited it.
                </p>

                <ProjectFacts>
                    <ProjectFact label='Model'>Qwen3-4B</ProjectFact>
                    <ProjectFact label='Knowledge base'>
                        500+ medical articles
                    </ProjectFact>
                    <ProjectFact label='AI approach'>
                        Fine-tuning with RAG
                    </ProjectFact>
                    <ProjectFact label='Deployment'>
                        Vercel, Fly.io and RunPod
                    </ProjectFact>
                </ProjectFacts>

                <section className={shared.section}>
                    <p className={shared.sectionLabel}>The experiment</p>
                    <h2>What changes when you own the model layer?</h2>
                    <p>
                        I wanted to understand the work hidden beneath a polished
                        AI feature. Using House, M.D. episode transcripts as the
                        domain material, I fine-tuned Qwen3-4B with Unsloth on
                        Google Compute Engine and served it through a private
                        endpoint on RunPod.
                    </p>
                    <p>
                        The fictional framing made the output easy to evaluate: the
                        system needed a recognisable conversational style while
                        still having access to external medical context.
                    </p>
                </section>

                <section className={shared.section}>
                    <p className={shared.sectionLabel}>Retrieval</p>
                    <h2>Give the model context it was never trained to recall</h2>
                    <p>
                        I processed and vectorised more than 500 medical Wikipedia
                        articles into Pinecone. At runtime, Gemini supports
                        context-aware retrieval so the application can assemble
                        relevant reference material before generating a response.
                    </p>

                    <PullQuote>
                        Fine-tuning shaped the voice. Retrieval supplied the
                        situational knowledge. The application needed both.
                    </PullQuote>
                </section>

                <section className={shared.section}>
                    <p className={shared.sectionLabel}>Delivery</p>
                    <h2>A model is only one part of the product</h2>
                    <p>
                        The Next.js frontend runs on Vercel, the FastAPI backend on
                        Fly.io and the private inference endpoint on RunPod. The
                        boundaries made deployment concerns visible: request
                        latency, service availability, credentials and the contract
                        between the user-facing app and specialised infrastructure.
                    </p>
                    <p>
                        If I extend this case study, this is where I would add model
                        evaluations, latency measurements and examples of retrieval
                        failures. Those would turn a working technical demonstration
                        into a stronger account of system quality.
                    </p>

                    <div className={shared.linkList}>
                        <a
                            className={shared.externalLink}
                            href='https://housemdchatbot-frontend.vercel.app/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Live demo <span aria-hidden='true'>↗</span>
                        </a>
                        <a
                            className={shared.externalLink}
                            href='https://github.com/jmigsan/housemdchatbot-frontend'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Frontend repository <span aria-hidden='true'>↗</span>
                        </a>
                        <a
                            className={shared.externalLink}
                            href='https://github.com/jmigsan/housemdchatbot-backend'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Backend repository <span aria-hidden='true'>↗</span>
                        </a>
                    </div>
                </section>
            </article>

            <ProjectPager
                nextHref='/projects/powerpoint-automation'
                nextTitle='PowerPoint Automation'
            />
        </main>
    );
}
