import { cn } from "@/lib/utils";
import React from "react";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    id?: string;
}

export const SectionWrapper = ({
    children,
    className,
    id,
    ...props
}: SectionWrapperProps) => {
    return (
        <section
            id={id}
            className={cn("py-12 md:py-20 lg:py-24", className)}
            {...props}
        >
            {children}
        </section>
    );
};
