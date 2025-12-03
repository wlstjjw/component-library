import type React from "react";

export interface BadgeProps {
    variant: BadgeVariant;
    size: BadgeSize;
    color: BadgeColor;
    isDot?: boolean;
    icon?: React.ReactNode;
}

export type BadgeVariant = "light" | "outlined" | "filled" | "dot"
export type BadgeSize = "s" | "m" | "l"
export type BadgeColor = "primary" | "neutrals" | "success" | "info" | "warning" | "error" | "gray"
