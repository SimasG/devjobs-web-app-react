import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
// import Main from "./components/Main";
import JobPage from "./components/JobPage";

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
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route exact path="/" element={<JobPage />}></Route>
        </Routes>
        {/* <Routes>
          <Route exact path="/" element={<Main />}></Route>
        </Routes> */}
      </ThemeProvider>
    </Router>
  );
}

export default App;
