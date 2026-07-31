"use client";

import { ViewTransition } from "react";

const transitionClasses = {
    default: "route-fade",
    "route-slide-left": "route-slide-left",
    "route-slide-right": "route-slide-right",
    "route-slide-up": "route-slide-up",
    "route-slide-down": "route-slide-down",
    "route-fade": "route-fade",
};

export default function RouteViewTransition({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ViewTransition name='route-page' default={transitionClasses}>
            <div className='flex-1 flex flex-col w-full h-full'>
                {children}
            </div>
        </ViewTransition>
    );
}
