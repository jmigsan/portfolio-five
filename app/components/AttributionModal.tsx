import { MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AttributionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AttributionModal = ({ isOpen, onClose }: AttributionModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className='fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4'
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className='bg-white rounded-lg p-6 max-w-md w-full max-h-[80vh] overflow-y-auto relative'
                        onClick={(e: MouseEvent) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className='absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold'
                            aria-label='Close modal'
                        >
                            ×
                        </button>

                        <h2 className='text-2xl font-bold mb-4'>Attribution</h2>

                        <div className='space-y-4'>
                            <div>
                                <h3 className='font-semibold mb-2'>Video</h3>
                                <p className='text-sm text-gray-600'>
                                    <a
                                        href='https://www.pexels.com/video/a-highway-with-a-blue-sky-and-white-clouds-27373527/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='hover:underline'
                                    >
                                        Video by Furkan Elveren from Pexels
                                    </a>
                                </p>
                            </div>

                            <div>
                                <h3 className='font-semibold mb-2'>Fonts</h3>
                                <p className='text-sm text-gray-600'>
                                    Nacelle by Sora Sagano
                                </p>
                                <p className='text-sm text-gray-600'>
                                    Lora by Cyreal
                                </p>
                            </div>

                            <div>
                                <h3 className='font-semibold mb-2'>
                                    Technologies
                                </h3>
                                <p className='text-sm text-gray-600'>
                                    Built with Next.js, React, TypeScript, and
                                    Tailwind CSS
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AttributionModal;
