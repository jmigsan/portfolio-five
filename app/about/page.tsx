import styles from "./about.module.css";
import DirectionalLink from "../components/DirectionalLink";
import LinkWrapper from "../components/LinkWrapper";
import Image from "next/image";
import polaroid1 from "../assets/polaroid-1.jpg";
import polaroid2 from "../assets/polaroid-2.jpg";
import polaroid3 from "../assets/polaroid-3.jpg";
import * as motion from "framer-motion/client";

const About = () => {
    return (
        <div className='flex-col font-lora p-10 overflow-hidden'>
            <div className='flex justify-end -mt-4 mb-3 md:mb-0'>
                <LinkWrapper>
                    <DirectionalLink href='/'>Back to Home →</DirectionalLink>
                </LinkWrapper>
            </div>
            <div className='flex md:flex-row flex-col-reverse'>
                <div className='md:w-1/2 flex flex-col items-center justify-center md:justify-start relative mt-10 md:mt-0'>
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
                                    sizes='300px'
                                    placeholder='blur'
                                    className='object-cover'
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className='md:w-1/2'>
                    <h1 className={styles.heading1}>About Me</h1>
                    <p className={styles.paragraph}>
                        I&apos;m a product-minded software engineer who likes
                        turning unclear, fiddly workflows into products people
                        can actually use. I&apos;m also a Computer Science
                        graduate from Queen Mary University of London. Most
                        recently, I designed, built, deployed and supported{" "}
                        <DirectionalLink
                            href='/case-studies/hymndeck'
                            className='font-bold underline underline-offset-4'
                        >
                            HymnDeck
                        </DirectionalLink>
                        , an AI automation SaaS used by church worship teams.
                    </p>

                    <h2 className={styles.heading2}>Why Do I Build?</h2>

                    <p className={styles.paragraph}>
                        The best part of building something is watching someone
                        use it. Code, infrastructure and product decisions are
                        all ways of getting there. That probably connects to the
                        role I play outside work too: when something technical
                        breaks, I&apos;m usually the person friends ask to fix
                        it.
                    </p>

                    <h2 className={styles.heading2}>What Have I Shipped?</h2>

                    <p className={styles.paragraph}>
                        I owned HymnDeck end to end: customer research, product
                        decisions, frontend, backend, AI orchestration, billing,
                        cloud infrastructure, deployment and production
                        support. At its peak, two churches used it every week.
                        One still uses it to prepare Sunday services, reducing a
                        workflow that could take several hours to around ten
                        minutes.
                    </p>

                    <p className={styles.paragraph}>
                        It runs on Next.js, FastAPI and Postgres, with long AI
                        jobs handled through Cloud Tasks. Its job state survives
                        container restarts, duplicate delivery and model
                        failures. It has stayed in production since April 2026
                        without manual intervention to keep it alive, at
                        near-zero running cost.
                    </p>

                    <h2 className={styles.heading2}>What Did It Teach Me?</h2>

                    <p className={styles.paragraph}>
                        My first import flow assumed churches worked from one
                        carefully maintained master presentation. In reality,
                        they rehearsed from folders of old PowerPoints, so I
                        rebuilt it around what they actually had. That experience
                        reinforced something I now try to practise: observe the
                        workflow before becoming attached to the solution.
                    </p>

                    <p className={styles.paragraph}>
                        I also built billing, but none of HymnDeck&apos;s users
                        converted from free to paid. I tested product and
                        technical risk before properly testing willingness to
                        pay or distribution. Its engineering depth outran its
                        commercial validation, and I would sequence those risks
                        differently now.
                    </p>

                    <h2 className={styles.heading2}>How Do I Work?</h2>

                    <p className={styles.paragraph}>
                        I care about doing things properly, sometimes beyond the
                        point where the extra work matters. Building alone has
                        taught me that quality is not the same as perfecting
                        everything: it also means deciding what deserves care,
                        what needs feedback and what simply needs to ship.
                    </p>

                    <p className={styles.paragraph}>
                        Solo work has taught me ownership and speed, but also
                        where collaboration pays: reviewing decisions early,
                        challenging scope and going deeper instead of constantly
                        switching disciplines. I work best with people who trust
                        one another enough to disagree openly and change their
                        minds.
                    </p>

                    <h2 className={styles.heading2}>
                        Who Am I Outside Software?
                    </h2>

                    <p className={styles.paragraph}>
                        Much of my life revolves around church and friends—often
                        basketball, dinners, video games, or saying yes to
                        wherever people are going.
                    </p>

                    <h2 className={styles.heading2}>What Am I Looking For?</h2>

                    <p className={styles.paragraph}>
                        Product engineering is my clearest edge, but I&apos;m
                        open to frontend, backend, infrastructure and adjacent
                        roles. I&apos;d like to join a team where I can own
                        meaningful problems, learn from experienced engineers
                        and keep seeing my work reach the people it was made for.
                    </p>

                    <p className={styles.paragraph}>
                        <DirectionalLink
                            href='/contact'
                            className='font-bold underline underline-offset-4'
                        >
                            Let&apos;s connect
                        </DirectionalLink>{" "}
                        if you&apos;re hiring, or if you need someone who can
                        take an AI or automation idea through product, build,
                        deployment and the messy part afterwards. If you run an
                        agency and occasionally have more delivery work than
                        hands, here&apos;s{" "}
                        <DirectionalLink
                            href='/for-agencies'
                            className='font-bold underline underline-offset-4'
                        >
                            how I work with agencies
                        </DirectionalLink>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
