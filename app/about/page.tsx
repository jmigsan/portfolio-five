import Link from "next/link";
import styles from "./about.module.css";
import LinkWrapper from "../components/LinkWrapper";
import Image from "next/image";
import polaroid1 from "../assets/polaroid-1.jpg";
import polaroid2 from "../assets/polaroid-2.jpg";
import polaroid3 from "../assets/polaroid-3.jpg";
import * as motion from "framer-motion/client";

const About = () => {
    return (
        <div className='flex-col font-lora p-10 overflow-hidden'>
            <div className='flex justify-end -mt-4 mb-3 md:mt-0 md:mb-0'>
                <LinkWrapper>
                    <Link href='/'>Back to Home →</Link>
                </LinkWrapper>
            </div>
            <div className='flex md:flex-row flex-col-reverse'>
                <div className='md:w-1/2 flex flex-col items-center justify-center relative mt-10 md:mt-0'>
                    {[polaroid1, polaroid2, polaroid3].map((image, i) => (
                        <motion.div
                            key={i}
                            initial={{
                                x: "20vw",
                                y: -1000,
                                opacity: 0,
                                rotate: 15,
                            }}
                            animate={{
                                x: 0,
                                y: 0,
                                opacity: 1,
                                rotate: i % 2 === 0 ? -5 : 5,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 50,
                                damping: 15,
                                delay: 0.5 + i * 0.2,
                            }}
                            className='bg-white p-4 pb-12 shadow-2xl skew-y-1 -mt-22 first:mt-0'
                            style={{ width: "300px", zIndex: 3 - i }}
                        >
                            <div className='relative aspect-square w-full overflow-hidden bg-gray-200'>
                                <Image
                                    src={image}
                                    alt={`Polaroid ${i + 1}`}
                                    fill
                                    className='object-cover'
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className='md:w-1/2'>
                    <h1 className={styles.heading1}>About Me</h1>
                    <p className={styles.paragraph}>
                        I&apos;m a Computer Science graduate from Queen Mary
                        University of London who builds end-to-end products that
                        solve real problems. I love taking on technical
                        challenges that don&apos;t have obvious solutions and
                        turning them into working systems that people actually
                        use.
                    </p>
                    <h2 className={styles.heading2}>What I Build</h2>

                    <p className={styles.paragraph}>
                        I specialize in full-stack development with a focus on
                        AI and LLM applications. Recently, I fine-tuned a
                        Qwen3-4B model on medical dialogue data and built a
                        complete RAG pipeline with vector search across 500+
                        documents, deploying the entire stack to production.
                        I&apos;ve also developed a VR language learning
                        application where users have real-time conversations
                        with NPCs in 38+ languages, integrating speech
                        recognition, LLM-powered dialogue generation, and
                        dynamic narrative systems.
                    </p>
                    <p className={styles.paragraph}>
                        I&apos;m technically adaptable and enjoy learning new
                        frameworks quickly—whether it&apos;s working with
                        LangGraph for agent workflows, deploying on GCP and
                        RunPod, or building with Next.js and React. I care
                        deeply about user experience and making complex
                        technology feel simple.
                    </p>

                    <h2 className={styles.heading2}>Real-World Impact</h2>

                    <p className={styles.paragraph}>
                        One of my most satisfying projects was a Python
                        automation tool that reduced a repetitive 2-hour task to
                        15 minutes. Seeing my team adopt it immediately and use
                        it every week showed me the value of solving friction
                        points that people face daily. I&apos;ve also managed
                        technical infrastructure for live events with 1,000+
                        concurrent viewers, where there&apos;s no room for error
                        and real-time problem-solving is essential.
                    </p>

                    <p className={styles.paragraph}>
                        I&apos;m excited about working on problems that push
                        boundaries—especially in AI, automation, and user-facing
                        products where technology directly improves how people
                        work or learn.
                    </p>

                    <p className={styles.paragraph}>
                        <span className='font-bold'>Let&apos;s connect</span> if
                        you&apos;re working on something interesting and need
                        someone who can ship quality code, pick up new
                        technologies quickly, and contribute from day one.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
