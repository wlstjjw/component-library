import styled from "@emotion/styled";
import {type BadgeProps} from "@/types/components/jinseo/badge";

// 1. color: primary, secondary, success, info, warning, error, gray
// 2. size: s, m, l
// 3. variant: light, outlined, filled, ghost

export default function Badge(props: BadgeProps) {
    const {
        variant,
        size,
        color,
    } = props;

    return (
        <StyledBadge
            $variant={variant}
            $size={size}
            $color={color}
        >badge</StyledBadge>
    )
}

export const StyledBadge = styled.div<{
    $variant: BadgeProps["variant"];
    $size: BadgeProps["size"];
    $color: BadgeProps["color"];
}>`
    border-radius: 999px;
    background: pink;

    padding: ${({$size}) => {
        switch ($size) {
            case "s":
                return "1px 4px";
            case "m":
                return "2px 6px";
            case "l":
                return "4px 8px";
        }
    }};
    font-size: ${({$size}) => {
        switch ($size) {
            case "s":
                return "12px";
            case "m":
                return "14px";
            case "l":
                return "16px";
        }
    }};
`