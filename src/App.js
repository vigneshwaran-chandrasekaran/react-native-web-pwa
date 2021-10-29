import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import PouchDB from "./components/PouchDB";
import ReactNativeWeb from "./components/ReactNativeWeb";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/react-native-web">React Native Web</Link>
            </li>
            <li>
              <Link to="/PouchDB">PouchDB</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/react-native-web">
            <ReactNativeWeb />
          </Route>
          <Route path="/PouchDB">
            <PouchDB />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
