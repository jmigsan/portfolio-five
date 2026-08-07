"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import DirectionalLink from "./components/DirectionalLink";
import LinkWrapper from "./components/LinkWrapper";

const AttributionModal = dynamic(() => import("./components/AttributionModal"), {
    ssr: false,
});

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className='isolate flex-1 flex flex-col p-12 sm:p-24 justify-between relative overflow-hidden text-amber-200'>
            <div
                aria-hidden='true'
                className='pointer-events-none fixed inset-0 z-0 bg-[#849dbd]'
            >
                <video
                    autoPlay
                    disablePictureInPicture
                    loop
                    muted
                    playsInline
                    poster='/road-poster.webp'
                    preload='metadata'
                    className='h-full w-full object-cover object-[center_74%]'
                >
                    <source src='/road.webm' type='video/webm' />
                    <source src='/road.mp4' type='video/mp4' />
                </video>
            </div>
            <div className='relative z-10 flex justify-between text-xl sm:text-2xl'>
                <LinkWrapper>
                    <DirectionalLink
                        href='/about'
                        className='font-lora font-medium'
                    >
                        About Me
                    </DirectionalLink>
                </LinkWrapper>
                <LinkWrapper>
                    <DirectionalLink
                        href='/projects/hymndeck'
                        className='font-lora font-medium'
                    >
                        Projects
                    </DirectionalLink>
                </LinkWrapper>
            </div>
            <div className='relative z-10 flex flex-col items-center sm:gap-7 gap-5'>
                <p className='text-2xl sm:text-3xl font-lora font-medium'>
                    Juan Miguel Sanchez
                </p>
                <h1 className='text-5xl sm:text-6xl lg:text-7xl text-center font-nacelle-black'>
                    I build full stack software
                    <br />
                    and deploy AI solutions
                </h1>
            </div>
            <div className='relative z-10 flex justify-between text-xl md:text-2xl'>
                <LinkWrapper>
                    <DirectionalLink
                        href='/contact'
                        className='font-lora font-medium'
                    >
                        Contact Me
                    </DirectionalLink>
                </LinkWrapper>
                <LinkWrapper>
                    <button
                        onClick={openModal}
                        className='text-xl sm:text-2xl cursor-pointer font-lora font-medium'
                    >
                        Attribution
                    </button>
                </LinkWrapper>
            </div>
            <AttributionModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default Home;
