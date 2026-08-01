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
    title: "VR Language Learning — Conversational AI Case Study",
    description:
        "An experimental VR language-learning experience with speech input and dynamically generated NPC dialogue.",
};

export default function VrLanguageLearningCaseStudy() {
    return (
        <main className={`${shared.caseStudy} ${styles.page}`}>
            <header className={`${shared.hero} ${shared.readingColumn}`}>
                <p className={shared.eyebrow}>Case study · Immersive AI</p>
                <h1>
                    <span className={shared.titleLine}>VR Language</span>
                    <span className={shared.titleLine}>Learning</span>
                </h1>
                <p className={shared.tagline}>
                    Exploring language practice through spoken, contextual
                    conversations with virtual characters.
                </p>
            </header>

            <MediaFrame
                wide
                caption='An early demonstration of the virtual environment and conversational loop.'
            >
                <video controls muted playsInline preload='metadata'>
                    <source src='/vr-demo.mp4' type='video/mp4' />
                    Your browser does not support embedded video.
                </video>
            </MediaFrame>

            <article className={`${shared.articleBody} ${shared.readingColumn}`}>
                <p className={shared.standfirst}>
                    Language exercises often remove the uncertainty that makes real
                    conversation difficult. This project explored the opposite:
                    placing a learner inside a scene where they could speak, receive
                    a contextual response and continue a generated narrative.
                </p>

                <ProjectFacts>
                    <ProjectFact label='Experience'>Conversational VR</ProjectFact>
                    <ProjectFact label='Languages'>38+ supported</ProjectFact>
                    <ProjectFact label='Client'>Unity and C#</ProjectFact>
                    <ProjectFact label='AI services'>
                        Gemini, LangGraph and Whisper
                    </ProjectFact>
                </ProjectFacts>

                <section className={shared.section}>
                    <p className={shared.sectionLabel}>The interaction</p>
                    <h2>Practice a language inside a situation</h2>
                    <p>
                        The learner speaks to an NPC rather than selecting a fixed
                        dialogue option. OpenAI Whisper transcribes the speech, the
                        application interprets it in the current scene and the
                        character responds as part of the ongoing interaction.
                    </p>
                    <p>
                        The purpose was not to simulate unrestricted conversation.
                        It was to give learners a reason to use language: respond to
                        a character, move the scene forward and deal with an answer
                        they had not memorised in advance.
                    </p>
                </section>

                <section className={shared.section}>
                    <p className={shared.sectionLabel}>Orchestration</p>
                    <h2>A narrative that remembers where it is going</h2>
                    <p>
                        LangGraph coordinates the dynamic narrative, Gemini provides
                        generated dialogue and a Python FastAPI service connects the
                        AI workflow to the Unity client. The structure supports more
                        than 38 languages while keeping each response grounded in
                        the current conversational context.
                    </p>

                    <PullQuote>
                        The interesting engineering problem was not generating one
                        reply. It was maintaining a coherent learning experience
                        across an unfolding conversation.
                    </PullQuote>
                </section>

                <section className={shared.section}>
                    <p className={shared.sectionLabel}>Next questions</p>
                    <h2>Measure learning, not novelty</h2>
                    <p>
                        A future version of this case study should document the
                        interaction latency, how interruptions are handled and how a
                        learner’s progress could shape later scenes. It should also
                        test whether the open-ended experience improves confidence
                        or retention compared with a simpler conversational exercise.
                    </p>
                    <p>
                        Those questions are the difference between an interesting AI
                        prototype and a useful learning product—and they are where I
                        would take the work next.
                    </p>
                </section>
            </article>

            <ProjectPager
                nextHref='/projects/hymndeck'
                nextTitle='HymnDeck'
            />
        </main>
    );
}
