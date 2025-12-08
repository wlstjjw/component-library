import styled from "@emotion/styled";
import {type BadgeProps} from "@/types/components/jinseo/badge";
import { ReactComponent as MovieOffIcon } from "@/assets/icons/movie-off.svg";

// 1. color: primary, secondary, success, info, warning, error, gray
// 2. size: s, m, l
// 3. variant: light, outlined, filled, ghost

export default function Badge(props: BadgeProps) {
    const {
        variant,
        size,
        color,
        isDot,
        icon,
        text = "Badge",
    } = props;

    return (
        <StyledBadge
            $variant={variant}
            $size={size}
            $color={color}
            $isDot={isDot}
            $icon={icon}
            $text={text}
        >
            {icon}
            <StyledBadgeText $size={size}>{text}</StyledBadgeText>
        </StyledBadge>
    )
}

export const StyledBadge = styled.span<{
    $variant: BadgeProps["variant"];
    $size: BadgeProps["size"];
    $color: BadgeProps["color"];
    $isDot: BadgeProps["isDot"];
    $icon: BadgeProps["icon"];
    $text: BadgeProps["text"];
}>`
    width: fit-content;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 999rem;
    gap: 0.2rem;

    height: ${({$size}) => {
        switch ($size) {
            case "s":
                return "1.8rem";
            case "m":
                return "2.2rem";
            case "l":
                return "3rem";
        }
    }};
    padding: ${({$size}) => {
        switch ($size) {
            case "s":
                return "0.1rem 0.4rem";
            case "m":
                return "0.2rem 0.6rem";
            case "l":
                return "0.4rem 0.8rem";
        }
    }};
    background-color: ${({$variant, $color}) => {
        switch ($variant) {
            case "filled":
                return $color == "gray" ? "var(--neutrals-300)" : `var(--${$color}-500)`;
            case "dot":
                return "transparent";
            default:
                return $color == "gray" ? "var(--neutrals-op-01)" : `var(--${$color}-op-01)`;
        }
    }};
    border: ${({$variant, $color}) => {
        if ($variant == "outlined") {
            return $color == "gray" ? "0.1rem solid var(--neutrals-200)" : `0.1rem solid var(--${$color}-300)`;
        }
        else {
            return "unset";
        }
    }};
    color: ${({$variant, $color}) => {
        if ($variant == "filled") {
            return "var(--white)";
        }
        else {
            switch ($color) {
                case "neutrals":
                    return "var(--neutrals-600)";
                case "gray":
                    return "var(--neutrals-400)";
                default:
                    return `var(--${$color}-500)`;
            }
        }
    }};

    svg {
        display: inline-block;
        width: ${({$size}) => {
            switch ($size) {
                case "s":
                    return "1.4rem";
                case "m":
                    return "1.6rem";
                case "l":
                    return "1.8rem";
            }
        }};
        height: ${({$size}) => {
            switch ($size) {
                case "s":
                    return "1.4rem";
                case "m":
                    return "1.6rem";
                case "l":
                    return "1.8rem";
            }
        }};
    }
    &::before {
        content: ${({$variant, $isDot}) => $variant == "dot" || $isDot == true ? "''" : "unset"};
        border-radius: 999rem;
        width: ${({$size}) => $size == "l" ? "0.7rem" : "0.5rem"};
        height: ${({$size}) => $size == "l" ? "0.7rem" : "0.5rem"};
        margin: ${({$size}) => $size == "l" ? "0.45rem" : "0.35rem"};
        border-width: ${({$size}) => $size == "l" ? "0.35rem" : "0.25rem"};
        border-style: solid;
        border-color: currentColor;
    }
`

export const StyledBadgeText = styled.span<{
    $size: BadgeProps["size"];
}>`
    padding: 0rem 0.2rem;
    white-space: nowrap;
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: -0.02rem;
    font-size: ${({$size}) => {
        switch ($size) {
            case "s":
                return "1.2rem";
            case "m":
                return "1.4rem";
            case "l":
                return "1.6rem";
        }
    }};
`