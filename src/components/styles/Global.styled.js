import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
boz-sizing: border-box;
margin: 0;
padding: 0;
transition: 300ms;
}

body{
font-family: 'Plus Jakarta Sans', sans-serif;
}

img{
max-width: 100%;
}
`;

export default GlobalStyles;
