import "./css/App.css";
import "./css/normalize.css";
import { Route, Router, Switch } from "wouter";

import Home from "./pages/Home.jsx";
import Movie from "./pages/Movie.jsx";
import Companie from "./pages/Companie.jsx";

function App() {
  return (
    <Router base="/moviesearch">
      <Switch>
        <Route path="/" component={Home} /> // Home path
        <Route path="/movie/:id" component={Movie} /> // Movie path
        <Route path="/companie/:id" component={Companie} /> // Companies path
        <Route>404</Route> // Error path
      </Switch>
    </Router>
  );
}

export default App;
