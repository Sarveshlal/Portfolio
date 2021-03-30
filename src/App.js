import Landing from "./landing";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Projects from "./projects";
import Personals from "./personals";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            path="/projects"
            render={() => {
              return <Projects />;
            }}
          />
          <Route
            path="/personals"
            render={() => {
              return <Personals />;
            }}
          />
          <Route
            path="/"
            render={() => {
              return <Landing />;
            }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
