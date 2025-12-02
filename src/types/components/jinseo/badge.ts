export interface BadgeProps {
    variant: BadgeVariant;
    size: BadgeSize;
    color: BadgeColor;
    // isDot: boolean;
}

export type BadgeVariant = "light" | "outlined" | "filled" | "dot"
export type BadgeSize = "s" | "m" | "l"
export type BadgeColor = "primary" | "secondary" | "success" | "info" | "warning" | "error" | "gray"
