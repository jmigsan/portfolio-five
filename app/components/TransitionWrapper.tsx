"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useContext } from "react";

// Helper to freeze the context (keep the old page alive during exit animation)
// This is a known pattern for Next.js App Router transitions
const FrozenRouter = (props: { children: React.ReactNode }) => {
    const context = useContext(LayoutRouterContext);
    const frozen = useRef(context).current;

    return (
        <LayoutRouterContext.Provider value={frozen}>
            {props.children}
        </LayoutRouterContext.Provider>
    );
};

const pageCoordinates: Record<string, { x: number; y: number }> = {
    "/about": { x: -1, y: 0 },
    "/": { x: 0, y: 0 },
    "/projects": { x: 1, y: 0 },
    "/contact": { x: 0, y: 1 },
};

const TransitionWrapper = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const prevPathname = useRef(pathname);

    const getCoordinates = (path: string) => {
        return pageCoordinates[path] || { x: 0, y: 0 };
    };

    const coords = getCoordinates(pathname);
    const prevCoords = getCoordinates(prevPathname.current);

    const dx = coords.x - prevCoords.x;
    const dy = coords.y - prevCoords.y;

    useEffect(() => {
        prevPathname.current = pathname;
    }, [pathname]);

    const variants = {
        enter: (direction: { dx: number; dy: number }) => ({
            x: direction.dx > 0 ? "100%" : direction.dx < 0 ? "-100%" : 0,
            y: direction.dy > 0 ? "100%" : direction.dy < 0 ? "-100%" : 0,
            opacity: 1,
        }),
        center: {
            x: 0,
            y: 0,
            opacity: 1,
        },
        exit: (direction: { dx: number; dy: number }) => ({
            x: direction.dx > 0 ? "-100%" : direction.dx < 0 ? "100%" : 0,
            y: direction.dy > 0 ? "-100%" : direction.dy < 0 ? "100%" : 0,
            opacity: 1,
        }),
    };

    return (
        <AnimatePresence mode='popLayout' initial={false} custom={{ dx, dy }}>
            <motion.div
                key={pathname}
                custom={{ dx, dy }}
                variants={variants}
                initial='enter'
                animate='center'
                exit='exit'
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className='flex-1 flex flex-col w-full h-full'
            >
                <FrozenRouter>{children}</FrozenRouter>
            </motion.div>
        </AnimatePresence>
    );
};

export default TransitionWrapper;
