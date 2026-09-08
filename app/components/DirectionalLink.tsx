"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

export type SlideDirection = "left" | "right" | "up" | "down" | "fade";

type DirectionalLinkProps = Omit<
    ComponentProps<typeof Link>,
    "href" | "transitionTypes"
> & {
    href: string;
    direction?: SlideDirection;
};

const projectPaths = [
    "/case-studies/hymndeck",
    "/case-studies/house-md-chatbot",
    "/case-studies/powerpoint-automation",
    "/case-studies/vr-language-learning",
] as const;

const getRouteCoordinates = (pathname: string) => {
    if (pathname === "/about") {
        return { x: -1, y: 0 };
    }

    if (pathname === "/contact") {
        return { x: 0, y: 1 };
    }

    if (pathname === "/for-agencies") {
        return { x: 0, y: -1 };
    }

    const projectIndex = projectPaths.findIndex((path) => path === pathname);
    if (projectIndex >= 0) {
        return { x: projectIndex + 1, y: 0 };
    }

    return { x: 0, y: 0 };
};

const getDirection = (from: string, to: string): SlideDirection => {
    const current = getRouteCoordinates(from);
    const target = getRouteCoordinates(to);

    if (target.x > current.x) return "left";
    if (target.x < current.x) return "right";
    if (target.y > current.y) return "up";
    if (target.y < current.y) return "down";

    return "fade";
};

export default function DirectionalLink({
    href,
    direction,
    ...props
}: DirectionalLinkProps) {
    const pathname = usePathname();
    const resolvedDirection = direction ?? getDirection(pathname, href);
    const transitionType =
        resolvedDirection === "fade"
            ? "route-fade"
            : `route-slide-${resolvedDirection}`;

    return (
        <Link
            {...props}
            href={href}
            transitionTypes={[transitionType]}
        />
    );
}
