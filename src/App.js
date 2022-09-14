import "./css/App.css";
import "./css/normalize.css";
import { Route, Switch } from "wouter";

import Home from "./pages/Home.jsx";
import Movie from "./pages/Movie.jsx";
import Companie from "./pages/Companie.jsx";
console.log(process.env.REACT_APP_API_KEY);

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/movie/:id" component={Movie} />
      <Route path="/companie/:id" component={Companie} />
      <Route path="/:rest*">
        {(params) => `404, Sorry the page ${params.rest} does not exist!`}
      </Route>
    </Switch>
  );
}

export default App;
