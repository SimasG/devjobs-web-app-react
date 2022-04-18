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
    /* list-style-type: none; */
    text-decoration: none;
}

h1 {
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 3.4rem;
    font-family: 'Kumbh Sans', sans-serif;    
    color: ${(props) => props.theme.colors.primary.veryDarkBlue}
}

h2 {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 2.9rem;
    font-family: 'Kumbh Sans', sans-serif;    
    color: ${(props) => props.theme.colors.primary.veryDarkBlue}
}

h3 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.4rem;
    font-family: 'Kumbh Sans', sans-serif;  
    color: ${(props) => props.theme.colors.primary.veryDarkBlue}  
}

h4 {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.8rem;
    font-family: 'Kumbh Sans', sans-serif;    
}

span {
    font-size: 1.6rem;
    line-height: 2.6rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.secondary.gray2};
    font-family: 'Kumbh Sans', sans-serif;
}

li, p {
    font-size: 1.6rem;
    line-height: 2.6rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.secondary.darkGray};
    font-family: 'Kumbh Sans', sans-serif;
}

input {
    font-family: 'Kumbh Sans', sans-serif;    
}

ul, li, button {
    cursor: pointer;
}

ul {
    font-size: 1.6rem;
    line-height: 2.6rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.secondary.darkGray};
    font-family: 'Kumbh Sans', sans-serif;
}

a {
    font-family: 'Kumbh Sans', sans-serif;    
    color: ${(props) => props.theme.colors.secondary.darkGray};
}
`;

export default GlobalStyles;
