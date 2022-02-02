import { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import GlobalStyle from "./globalStyles";
import { Route, Switch } from "react-router-dom";

// components
import Main from "./components/Main";
import BlogPage from "./components/BlogPage";
import AboutPage from "./components/AboutPage";
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Switch>
          <Route exact page="/" component={Main} />
          <Route exact page="/about" component={AboutPage} />
          <Route exact page="/blog" component={BlogPage} />
          <Route exact page="/work" component={WorkPage} />
          <Route exact page="/skills" component={MySkillsPage} />
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
