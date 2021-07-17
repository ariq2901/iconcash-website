/* eslint-disable no-unused-vars */
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
