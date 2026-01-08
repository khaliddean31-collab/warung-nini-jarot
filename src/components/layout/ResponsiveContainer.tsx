import { cn } from "@/lib/utils";
import React from "react";

interface ResponsiveContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const ResponsiveContainer = ({
    children,
    className,
    ...props
}: ResponsiveContainerProps) => {
    return (
        <div
            className={cn(
                "w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};
