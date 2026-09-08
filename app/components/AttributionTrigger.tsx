"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import LinkWrapper from "./LinkWrapper";

const AttributionModal = dynamic(() => import("./AttributionModal"), {
    ssr: false,
});

export default function AttributionTrigger() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [hasOpened, setHasOpened] = useState(false);

    const openModal = () => {
        setHasOpened(true);
        setIsModalOpen(true);
    };

    return (
        <>
            <LinkWrapper>
                <button
                    onClick={openModal}
                    className='text-xl sm:text-2xl cursor-pointer font-lora font-medium'
                >
                    Attribution
                </button>
            </LinkWrapper>
            {hasOpened && (
                <AttributionModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </>
    );
}
