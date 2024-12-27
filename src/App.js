import Body from "./components/Body";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global.styled";

import "./index.css";

const theme = {
  color: {
    moderateBlue: "hsl(238, 40%, 52%)",
    softRed: "hsl(358, 79%, 66%)",
    lightGrayishBlue: "hsl(239, 57%, 85%)",
    paleRed: " hsl(357, 100%, 86%)",
    darkBlue: "hsl(212, 24%, 26%)",
    grayishBlue: "hsl(211, 10%, 45%)",
    lightGray: "hsl(223, 19%, 93%)",
    VerylightGray: "hsl(228, 33%, 97%)",
    white: "hsl(0, 0%, 100%)",
  },
  mobile: 450,
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
        <Body />
      </>
    </ThemeProvider>
  );
}

export default App;
