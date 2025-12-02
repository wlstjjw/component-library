import { css } from "@emotion/react";

import * as reset from "@/styles/common/reset.css";
import * as colors from "@/styles/common/colors.css";
import * as fonts from "@/styles/common/fonts.css";

export const globalStyle = () => css`
  ${reset};
  ${colors};
  ${fonts};
`;
