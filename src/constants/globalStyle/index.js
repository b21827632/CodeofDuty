import { createGlobalStyle } from "styled-components";

const bg_dark = "rgba(52,53,65,1)";
const bg_white = "white";

export const Themes = {
  true: {
    background: bg_white,
    color: bg_dark,
    color_accent: "blue",
  },

  false: {
    background: bg_dark,
    color: bg_white,
    color_accent: "green",
  },
};

//TODO: implement a json object that is {"true": {whiteTheme Options}, "false":{DarkTheme Options}}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${({ white }) => Themes[white].background};
  }
`;

export default GlobalStyle;
