"use client";

import Link from "next/link";
import LinkWrapper from "../components/LinkWrapper"; // Assuming this path is correct based on previous file content
import Image from "next/image";
import profilePic from "../assets/professional-me.jpg"; // Importing the image directly

const Contact = () => {
    return (
        <div className='flex flex-col min-h-screen relative overflow-hidden bg-[#f4f1ea] text-black font-lora'>
            {/* Background elements can go here if needed to match the "desk" vibe, but proceeding with clean center first */}

            <div className='absolute top-7 left-7 md:top-10 md:left-10 z-50'>
                <LinkWrapper>
                    <Link href='/'>Back to Home ↑</Link>
                </LinkWrapper>
            </div>

            <div className='flex-1 flex items-center justify-center p-4 mt-20 md:mt-0'>
                {/* Main Card Container */}
                <div className='relative w-full max-w-2xl bg-[#fdfbf7] p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.1)] rounded-sm border border-[#e0e0e0] transform rotate-1 transition-transform hover:rotate-0 duration-500'>
                    {/* decorative elements (tape, clips could go here) */}
                    <div className='absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-12 bg-yellow-100/80 backdrop-blur-sm rotate-2 shadow-sm border border-yellow-200/50'></div>

                    <div className='flex flex-col md:flex-row gap-8 items-center'>
                        {/* Photo Section */}
                        <div className='relative shrink-0'>
                            <div className='w-48 h-64 bg-white p-3 shadow-md transform -rotate-3 border border-gray-200 -mt-8 md:-mt-74 -mr-16 md:mr-0'>
                                <div className='relative w-full h-full overflow-hidden grayscale contrast-125'>
                                    <Image
                                        src={profilePic}
                                        alt='Juan Miguel Sanchez'
                                        fill
                                        className='object-cover'
                                        priority
                                    />
                                </div>
                                {/* Paper clip visual could be CSS or SVG */}
                                <div className='absolute -top-[14px] right-5'>
                                    <svg
                                        width='29'
                                        height='66'
                                        viewBox='0 0 29 66'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            d='M1.32908 14.0712C0.495746 10.0712 0.729079 1.87122 8.32908 1.07122C15.9291 0.271222 18.4957 6.40455 18.8291 9.57122L27.3291 56.5712C27.9957 58.9046 28.0291 63.7712 22.8291 64.5712C17.6291 65.3712 14.9957 61.2379 14.3291 59.0712L7.32908 23.5712'
                                            stroke='#99a1af'
                                            strokeWidth='2'
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className='flex-1 text-left w-full'>
                            <div className='border-b-2 border-black pb-4 mb-4'>
                                <h1 className='text-4xl md:text-5xl font-bold font-nacelle-black tracking-tight mb-2'>
                                    Juan Miguel Sanchez
                                </h1>
                                <p className='text-xl text-gray-600 font-medium italic'>
                                    Full Stack Developer & AI Engineer
                                </p>
                            </div>

                            <div className='space-y-4 font-mono text-sm md:text-base'>
                                <div className='flex flex-col gap-1'>
                                    <span className='text-gray-500 uppercase tracking-wider text-xs font-bold'>
                                        Organization
                                    </span>
                                    <span className='font-bold'>
                                        Open to Work
                                    </span>
                                </div>

                                <div className='grid grid-cols-1 gap-3 mt-6'>
                                    <a
                                        href='/Juan Miguel Sanchez CV.pdf'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='group flex items-center gap-3 p-2 hover:bg-black hover:text-white transition-all border border-transparent hover:border-black'
                                    >
                                        <span className='font-bold min-w-[80px]'>
                                            CV
                                        </span>
                                        <span className='h-px bg-current flex-1 group-hover:bg-white opacity-30'></span>
                                        <span>VIEW PDF ↗</span>
                                    </a>

                                    <a
                                        href='mailto:juanmigsanchez@ymail.com'
                                        className='group flex items-center gap-3 p-2 hover:bg-black hover:text-white transition-all border border-transparent hover:border-black'
                                    >
                                        <span className='font-bold min-w-[80px]'>
                                            EMAIL
                                        </span>
                                        <span className='h-px bg-current flex-1 group-hover:bg-white opacity-30'></span>
                                        <span className=''>
                                            juanmigsanchez@ymail.com
                                        </span>
                                    </a>

                                    <a
                                        href='https://www.linkedin.com/in/jmigsan/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='group flex items-center gap-3 p-2 hover:bg-black hover:text-white transition-all border border-transparent hover:border-black'
                                    >
                                        <span className='font-bold min-w-[80px]'>
                                            LINKEDIN
                                        </span>
                                        <span className='h-px bg-current flex-1 group-hover:bg-white opacity-30'></span>
                                        <span className=''>in/jmigsan ↗</span>
                                    </a>

                                    <a
                                        href='https://github.com/jmigsan'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='group flex items-center gap-3 p-2 hover:bg-black hover:text-white transition-all border border-transparent hover:border-black'
                                    >
                                        <span className='font-bold min-w-[80px]'>
                                            GITHUB
                                        </span>
                                        <span className='h-px bg-current flex-1 group-hover:bg-white opacity-30'></span>
                                        <span className=''>@jmigsan ↗</span>
                                    </a>
                                </div>
                            </div>

                            {/* Signature area */}
                            <div className='mt-8 flex justify-end'>
                                <div className='font-edu-sa text-3xl -rotate-12 opacity-80 italic'>
                                    Miguel
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
