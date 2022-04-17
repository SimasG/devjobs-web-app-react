import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border: none;
}

html {
    font-size: 62.5%;
    font-family: 'Kumbh Sans', sans-serif;    
    scroll-behavior: smooth;
    overflow-x: hidden;
    background-color: ${(props) => props.theme.colors.secondary.lightGray};
}

body {
}

h1, h2, h3, h4, p, li, ul, span, a, button {
    list-style-type: none;
    text-decoration: none;
}

h1 {
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 3.4rem;
    font-family: 'Kumbh Sans', sans-serif;    
}

h2 {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 2.9rem;
    font-family: 'Kumbh Sans', sans-serif;    
}

h3 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.4rem;
    font-family: 'Kumbh Sans', sans-serif;    
}

h4 {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.8rem;
    font-family: 'Kumbh Sans', sans-serif;    
}

p, span {
    font-size: 1.6rem;
    line-height: 2.6rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.gray2}
    font-family: 'Kumbh Sans', sans-serif;    
}

code {
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.black4}
}

input {
    font-family: 'Kumbh Sans', sans-serif;    
}

ul, li, button {
    font-weight: bold;
    cursor: pointer;
}
`;

export default GlobalStyles;
