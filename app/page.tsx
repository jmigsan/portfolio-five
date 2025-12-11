"use client";

import { useState } from "react";
import Link from "next/link";
import AttributionModal from "./components/AttributionModal";
import LinkWrapper from "./components/LinkWrapper";

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className='flex-1 flex flex-col p-12 sm:p-24 justify-between relative overflow-hidden text-amber-200'>
            <video
                autoPlay
                loop
                muted
                playsInline
                className='fixed top-0 left-0 w-full h-full object-cover object-[center_74%] -z-10'
            >
                <source src='/road.mp4' type='video/mp4' />
            </video>
            <div className='flex justify-between text-xl sm:text-2xl'>
                <LinkWrapper>
                    <Link href='/about' className='font-lora font-medium'>
                        About Me
                    </Link>
                </LinkWrapper>
                <LinkWrapper>
                    <Link href='/projects' className='font-lora font-medium'>
                        Projects
                    </Link>
                </LinkWrapper>
            </div>
            <div className='flex flex-col items-center sm:gap-7 gap-5'>
                <p className='text-2xl sm:text-3xl font-lora font-medium'>
                    Juan Miguel Sanchez
                </p>
                <h1 className='text-5xl sm:text-6xl lg:text-7xl text-center font-nacelle-black'>
                    I build full stack software
                    <br />
                    and deploy AI solutions
                </h1>
            </div>
            <div className='flex justify-between text-xl md:text-2xl'>
                <LinkWrapper>
                    <Link href='/contact' className='font-lora font-medium'>
                        Contact Me
                    </Link>
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
