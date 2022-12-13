import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');

}

  *, *::before, *::after {
    font-family: "Pretendard", sans-serif;
    /* box-sizing: border-box; */
  }

  body {
    width: 100vw;
    height: 100vh;
    font-family: "Pretendard", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  p {
    color: #333;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
