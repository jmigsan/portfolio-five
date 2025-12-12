"use client";

import Link from "next/link";
import LinkWrapper from "../components/LinkWrapper";
import styles from "./projects.module.css";
import { useState, useRef, useEffect } from "react";

const projects = [
    {
        id: 1,
        title: "House MD Chatbot",
        tech: "TypeScript, Next.js, Tailwind, Python, FastAPI, Google Gen AI, Unsloth, RunPod, Pinecone",
        video: "/house-demo.mp4",
        description: [
            "Fine-tuned an open source LLM and deployed to a private endpoint. With RAG functionality.",
            "Qwen3-4B LLM fine-tuned on House, M.D. episode transcripts using Google Compute Engine.",
            "Implemented RAG pipeline. 500+ medical Wikipedia articles preprocessed and vectorised into Pinecone. Used Gemini API for context-aware retrieval at runtime.",
            "Deployed model to private endpoint on RunPod. Frontend on Vercel. Backend on Fly.io.",
            "Full-stack LLM application demonstrating data engineering, model fine-tuning, and production deployment.",
        ],
        links: [
            {
                label: "Frontend Repo",
                url: "http://github.com/jmigsan/housemdchatbot-frontend",
            },
            {
                label: "Backend Repo",
                url: "http://github.com/jmigsan/housemdchatbot-backend",
            },
            {
                label: "Live Demo",
                url: "https://housemdchatbot-frontend.vercel.app/",
            },
        ],
    },
    {
        id: 2,
        title: "PowerPoint Automation Tool",
        tech: "Python, python-pptx, Tkinter",
        video: "/ppt-demo.mp4",
        description: [
            "Developed an app to automate slide preparation. Task reduced from 2 hours to 15 minutes.",
            "Achieved 100% adoption by PowerPoint operators in 7-person team with continued active use.",
            "Packaged for non-technical users with PyInstaller and Inno Setup.",
        ],
        links: [
            {
                label: "Github Repo",
                url: "https://github.com/jmigsan/CentralPPTMaker",
            },
        ],
    },
    {
        id: 3,
        title: "Virtual Reality Language Learning App",
        tech: "C#, Unity, Google Gen AI, LangGraph, FastAPI, Python",
        video: "/vr-demo.mp4",
        description: [
            "Created VR app to teach language through speech-to-speech-like interactive NPC dialogue.",
            "Implemented dynamic narrative generation using LangGraph, Gemini API, and OpenAI Whisper to generate contextual conversations across 38+ supported languages.",
        ],
        links: [],
    },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<
        (typeof projects)[number] | null
    >(null);

    const detailsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (selectedProject && window.innerWidth < 768) {
            // Slight delay to allow layout to settle if needed, or just immediate
            setTimeout(() => {
                detailsRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }, 100);
        }
    }, [selectedProject]);

    return (
        <div className='flex flex-col font-lora p-4 md:p-10 min-h-screen md:h-screen md:overflow-hidden'>
            <div className='m-3 md:m-0'>
                <LinkWrapper>
                    <Link href='/'>← Back to Home</Link>
                </LinkWrapper>
            </div>
            <div className='flex flex-col-reverse md:flex-row h-full md:h-[calc(100vh-100px)] w-full'>
                <div
                    ref={detailsRef}
                    className='w-full md:w-1/2 flex-1 flex flex-col items-center text-foreground px-0 md:px-10 pt-10 md:overflow-y-auto no-scrollbar pb-20'
                >
                    {selectedProject ? (
                        <div className='flex flex-col items-center gap-6 animate-in fade-in duration-500 w-full'>
                            <div className='relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 shrink-0'>
                                <video
                                    src={selectedProject.video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <div className='text-center w-full'>
                                <h3 className='text-2xl font-bold mb-4 font-nacelle-black'>
                                    {selectedProject.title}
                                </h3>
                                <div className='flex flex-col gap-4 text-gray-700 dark:text-gray-300 text-lg text-left'>
                                    {selectedProject.description.map(
                                        (paragraph, index) => (
                                            <p key={index}>{paragraph}</p>
                                        )
                                    )}
                                </div>
                                <div className='flex gap-4 justify-center mt-6'>
                                    {selectedProject.links.map(
                                        (link, index) => (
                                            <a
                                                key={index}
                                                href={link.url}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors text-sm font-bold'
                                            >
                                                {link.label} ↗
                                            </a>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='text-xl text-gray-500 dark:text-gray-400 mt-10 md:mt-50 hidden md:block'>
                            Click on a project to learn more →
                        </div>
                    )}
                </div>
                <div className='w-full md:w-1/2 md:overflow-y-auto pl-0 md:pl-4 pb-10 md:pb-0'>
                    <h1
                        className={`${styles.heading1} text-center md:text-left`}
                    >
                        Projects
                    </h1>
                    <div className='flex flex-col gap-4 mt-6'>
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className={`${styles.card} ${
                                    selectedProject?.id === project.id
                                        ? "border-gray-400 dark:border-gray-500 bg-white dark:bg-gray-800 shadow-lg transform -translate-y-[2px]"
                                        : ""
                                }`}
                                onClick={() => setSelectedProject(project)}
                            >
                                <h2 className={styles.cardTitle}>
                                    {project.title}
                                </h2>
                                <p className={styles.cardText}>
                                    {project.tech}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
