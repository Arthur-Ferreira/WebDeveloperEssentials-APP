import styled from "styled-components";

import { colors, spacing } from "../../../global/vars";


const TypographyH1 = styled.h1`
  color: ${colors.gray300};
  text-align: center;
`

const TypographyH2 = styled.h2`
  color: ${colors.gray300};
  text-align: center;
`

const TypographyH3 = styled.h3`
  color: ${colors.gray100};
  font-size: 1.15rem;
  margin: ${spacing.space2} 0;
`
const TypographyH4 = styled.h4`
    font-size: 1rem;
    margin: ${spacing.space2};
    text-transform: uppercase;
`



export {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  // P, Small 
}