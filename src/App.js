import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import Header from "./components/Header";
import Main from "./components/Main";

const theme = {
  colors: {
    primary: {
      violet: "#5964E0",
      lightViolet: "#939BF4",
      veryDarkBlue: "#19202D",
      midnight: "#121721",
    },
    secondary: {
      white: "#fff",
      lightGray: "#F4F6F8",
      gray: "#9DAEC2",
      darkGray: "#6E8098",
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Main />
    </ThemeProvider>
  );
}

export default App;
