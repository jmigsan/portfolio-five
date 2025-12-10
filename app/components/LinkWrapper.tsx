"use client";
import { ReactNode } from "react";
import "./linkwrapper.css";

interface LinkWrapperProps {
    children: ReactNode;
    className?: string;
}

const LinkWrapper = ({ children, className = "" }: LinkWrapperProps) => {
    return (
        <div className={`link-wrapper ${className}`}>
            <div className='relative z-10'>{children}</div>
            <svg
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none'
                viewBox='-5 -5 440 180'
                width='250%'
                height='250%'
            >
                <path
                    d='M117.06 39.5C138.56 32.3333 196.26 18 255.06 18C328.56 18 418.56 26 422.56 73.5C426.56 121 346.06 155.5 240.56 159.5C135.06 163.5 13.5604 153.5 4.56036 96.5C-4.43964 39.5 96.5604 5.50001 204.56 4.00001'
                    fill='none'
                    stroke='#ef4444'
                    strokeWidth='8'
                    strokeLinecap='round'
                    strokeDasharray='1100'
                    strokeDashoffset='1100'
                    className='link-circle'
                />
            </svg>
        </div>
    );
};

export default LinkWrapper;
