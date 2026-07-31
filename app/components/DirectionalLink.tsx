"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { addTransitionType, startTransition } from "react";
import type { ComponentProps } from "react";

export type SlideDirection = "left" | "right" | "up" | "down" | "fade";

type DirectionalLinkProps = Omit<
    ComponentProps<typeof Link>,
    "href" | "onNavigate"
> & {
    href: string;
    direction?: SlideDirection;
};

const projectPaths = [
    "/projects/hymndeck",
    "/projects/house-md-chatbot",
    "/projects/powerpoint-automation",
    "/projects/vr-language-learning",
] as const;

const getRouteCoordinates = (pathname: string) => {
    if (pathname === "/about") {
        return { x: -1, y: 0 };
    }

    if (pathname === "/contact") {
        return { x: 0, y: 1 };
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
    replace,
    scroll,
    ...props
}: DirectionalLinkProps) {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <Link
            {...props}
            href={href}
            replace={replace}
            scroll={scroll}
            onNavigate={(event) => {
                event.preventDefault();

                startTransition(() => {
                    const resolvedDirection =
                        direction ?? getDirection(pathname, href);
                    const transitionType =
                        resolvedDirection === "fade"
                            ? "route-fade"
                            : `route-slide-${resolvedDirection}`;

                    addTransitionType(transitionType);

                    const options = { scroll };
                    if (replace) {
                        router.replace(href, options);
                    } else {
                        router.push(href, options);
                    }
                });
            }}
        />
    );
}
