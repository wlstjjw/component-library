export interface BadgeProps{
    label: string;
    variant: BadgeVariant;
    size: BadgeSize;
    color: BadgeColor;
    icon?: React.ReactNode;
    isDot?: boolean;
}

export type BadgeVariant = "light" | "outlined" | "filled" | "dot"
export type BadgeSize = "s" | "m" | "l"
export type BadgeColor = "primary" | "neutrals" | "success" | "info" | "warning" | "error" | "gray"