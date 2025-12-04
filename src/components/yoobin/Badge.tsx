import styled from "@emotion/styled";
import type { BadgeProps } from "@/types/components/yoobin/badge";
import { centerBoxStyles } from "@/styles/modules";

export default function Badge(props: BadgeProps){
    const { label, variant, size, color, icon, isDot } = props;

    return(
        <StyledBadge
             $variant={variant}
            $size={size}
            $color={color}
            $isDot={isDot}
            $icon={icon}
        > 
            <StyledDot $variant={variant} $color={color} $size={size} $isDot={isDot}/>
            {icon}
            <StyledLabel $size={size}>{label}</StyledLabel>
        </StyledBadge>
    )
}

const StyledBadge = styled.div<{
    $variant: BadgeProps["variant"];
    $color: BadgeProps["color"];
    $size: BadgeProps["size"];
    $isDot: BadgeProps["isDot"];
    $icon: BadgeProps["icon"];
}>`
  ${centerBoxStyles};
    width: fit-content;
    height: ${({ $size }) => {
        switch ($size) {
            case "s":
            return "1.8rem";
            case "m":
            return "2.2rem";
            case "l":
            return "3rem";
        }
    }};

    padding: ${({ $size }) => {
        switch ($size) {
            case "s":
            return "0 0.6rem";
            case "m":
            return "0 0.8rem";
            case "l":
            return "0 1rem";
        }
    }};

  border-radius: 8rem;

    color: ${({ $variant, $color }) => {
        if ($variant === "filled") return "var(--white)";

        if ($variant === "dot") {
            switch ($color) {
            case "neutrals":
                return "var(--neutrals-600)";
            case "gray":
                return "var(--neutrals-400)";
            default:
                return `var(--${$color}-500)`;
            }
        }

        switch ($color) {
            case "neutrals":
            return "var(--neutrals-600)";
            case "gray":
            return "var(--neutrals-400)";
            default:
            return `var(--${$color}-500)`;
        }
    }};

    background-color: ${({ $color, $variant }) => {
        switch ($variant) {
            case "light":
            case "outlined":
            return $color === "gray"? "var(--neutrals-op-01)": `var(--${$color}-op-01)`;

            case "filled":
            return $color === "gray"? "var(--neutrals-300)": `var(--${$color}-500)`;

            case "dot":
            return "transparent"; 
        }
    }};

  border: ${({ $color, $variant }) => {
        if ($variant !== "outlined") return "none";
        return $color === "gray" ? `0.1rem solid var(--neutrals-200)` : `0.1rem solid var(--${$color}-300)`;
    }};
  position: relative;
  gap: 0.2rem;

      svg {
        width: ${({ $size }) => {
            switch ($size) {
            case "s":
                return "1.4rem";
            case "m":
                return "1.6rem";
            case "l":
                return "1.8rem";
            }
        }};
        height: ${({ $size }) => {
            switch ($size) {
            case "s":
                return "1.4rem";
            case "m":
                return "1.6rem";
            case "l":
                return "1.8rem";
            }
        }};
        fill: ${({ $variant, $color }) => {
        if ($variant === "filled") return "var(--white)";

        switch ($color) {
            case "neutrals":
            return "var(--neutrals-600)";
            case "gray":
            return "var(--neutrals-400)";
            default:
            return `var(--${$color}-500)`;
        }
        }};
        }
    }
`;

const StyledDot = styled.span<{
  $variant: BadgeProps["variant"];
  $size: BadgeProps["size"];
  $color: BadgeProps["color"];
  $isDot: BadgeProps["isDot"];
}>`
  ${centerBoxStyles};

  width: ${({ $size }) => ($size === "l" ? "1.6rem" : "1.2rem")};
  height: ${({ $size }) => ($size === "l" ? "1.6rem" : "1.2rem")};

  &::before {
    content: ${({ $variant, $isDot }) =>
      $variant === "dot" || $isDot ? "''" : "unset"};

    display: ${({ $variant, $isDot }) =>
      $variant === "dot" || $isDot ? "block" : "none"};

    width: ${({ $size }) => ($size === "l" ? "0.7rem" : "0.5rem")};
    height: ${({ $size }) => ($size === "l" ? "0.7rem" : "0.5rem")};

    border-radius: 50%;

    background-color: ${({ $variant, $color }) => {
      if ($variant === "filled") return "var(--white)";
      if ($color === "neutrals") return "var(--neutrals-600)";
      if ($color === "gray") return "var(--neutrals-400)";
      return `var(--${$color}-500)`;
    }};
  }

width: ${({ $size }) => {
    switch ($size) {
      case "s":
        return "1.4rem";
      case "m":
        return "1.6rem";
      case "l":
        return "1.8rem";
    }
  }};

  height: ${({ $size }) => {
    switch ($size) {
      case "s":
        return "1.4rem";
      case "m":
        return "1.6rem";
      case "l":
        return "1.8rem";
    }
  }};
`;

const StyledLabel = styled.span<{
    $size: BadgeProps["size"];
}>`
font-size: ${({ $size }) => {
  switch ($size) {
    case "s":
      return "1.2rem";
    case "m":
      return "1.4rem";
    case "l":
      return "1.6rem";
  }
}};
  font-weight: 400;
  letter-spacing: -0.2px;
`;