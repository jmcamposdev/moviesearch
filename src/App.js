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
        <Route path="/" component={Home} /> {/* HomePage */}
        <Route path="/movie/:id" component={Movie} />  {/* MoviePage */}
        <Route path="/companie/:id" component={Companie} />  {/* CompanyPage */}
        <Route>404</Route>  {/* ErrorPage */}
      </Switch>
    </Router>
  );
}

export default App;
