import { createGlobalStyle } from "styled-components";
import { colors, font } from "../global/vars"


export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    list-style: none;
  }

  body {
    background-color: ${colors.gray500};
    color: ${colors.gray100};
    margin: 0;
    font-family: ${font};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  main {
    width: 90%;
    max-width: 50rem;
    margin: 0 auto;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
  }
}
`;