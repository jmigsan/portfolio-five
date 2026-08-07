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
    title: "PowerPoint Automation | Juan Miguel Sanchez",
    description:
        "The desktop automation tool that reduced a recurring PowerPoint workflow from two hours to fifteen minutes.",
};

export default function PowerPointAutomationCaseStudy() {
    return (
        <main className={`${shared.caseStudy} ${styles.page}`}>
            <header className={`${shared.hero} ${shared.readingColumn}`}>
                <p className={shared.eyebrow}>Case study · Workflow automation</p>
                <h1>
                    <span className={shared.titleLine}>PowerPoint</span>
                    <span className={shared.titleLine}>Automation</span>
                </h1>
                <p className={shared.tagline}>
                    A deliberately small tool that proved a much larger product
                    opportunity.
                </p>
            </header>

            <MediaFrame
                wide
                caption='The packaged desktop workflow used by PowerPoint operators.'
            >
                <video autoPlay loop controls muted playsInline preload='metadata' poster='/ppt-demo-poster.webp'>
                    <source src='/ppt-demo.mp4' type='video/mp4' />
                    Your browser does not support embedded video.
                </video>
            </MediaFrame>

            <article className={`${shared.articleBody} ${shared.readingColumn}`}>
                <p className={shared.standfirst}>
                    Before HymnDeck became a SaaS, it was a focused Python desktop
                    application. This version matters because it proved that the
                    workflow was worth improving and that nontechnical users would
                    make the tool part of their routine.
                </p>

                <ProjectFacts>
                    <ProjectFact label='Result'>2 hours → 15 minutes</ProjectFact>
                    <ProjectFact label='Adoption'>7-person operator team</ProjectFact>
                    <ProjectFact label='Stack'>Python, python-pptx, Tkinter</ProjectFact>
                    <ProjectFact label='Distribution'>
                        PyInstaller and Inno Setup
                    </ProjectFact>
                </ProjectFacts>

                <section className={shared.section}>
                    <p
                        className={`${shared.sectionLabel} ${shared.embossedLabel} ${shared.tiltSoftRight}`}
                    >
                        The opportunity
                    </p>
                    <h2>Automate the repetition, preserve the judgement</h2>
                    <p>
                        The weekly slide-preparation process contained a large amount
                        of mechanical work: gathering inputs, applying familiar
                        formatting and assembling a presentation. The operator still
                        needed control over the result, so the goal was not a black
                        box. It was a faster path to an editable PowerPoint file.
                    </p>
                    <p>
                        Python and python-pptx handled document generation, while a
                        small Tkinter interface kept the workflow approachable for
                        people who should never need to open a terminal or understand
                        the implementation.
                    </p>
                </section>

                <section className={shared.section}>
                    <p
                        className={`${shared.sectionLabel} ${shared.embossedLabel} ${shared.tiltLeft}`}
                    >
                        Adoption
                    </p>
                    <h2>Packaging was part of the product</h2>
                    <p>
                        The application was packaged with PyInstaller and Inno Setup
                        so it could be installed like ordinary desktop software. It
                        reached full adoption within the seven-person PowerPoint
                        operator team and continued to be used.
                    </p>

                    <PullQuote>
                        A technically correct script would not have changed the
                        workflow. The installable application did.
                    </PullQuote>
                </section>

                <section className={shared.section}>
                    <p
                        className={`${shared.sectionLabel} ${shared.embossedLabel} ${shared.tiltRight}`}
                    >
                        What followed
                    </p>
                    <h2>The prototype created the roadmap</h2>
                    <p>
                        Real use revealed what the next version needed: easier
                        access, broader configuration, a stronger product workflow
                        and infrastructure that could support more organisations.
                        Those lessons became the foundation for HymnDeck.
                    </p>
                    <p>
                        This project is a useful reminder that product development
                        does not have to begin with a platform. A narrow tool can
                        validate the painful part of a workflow before the larger
                        investment begins.
                    </p>

                    <div className={shared.linkList}>
                        <a
                            className={shared.externalLink}
                            href='https://github.com/jmigsan/CentralPPTMaker'
                            target='_blank'
                            rel='noreferrer'
                        >
                            GitHub repository <span aria-hidden='true'>↗</span>
                        </a>
                    </div>
                </section>
            </article>

            <ProjectPager
                nextHref='/projects/vr-language-learning'
                nextTitle='VR Language Learning'
            />
        </main>
    );
}
