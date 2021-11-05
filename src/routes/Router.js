import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import PouchDBExample from "../components/PouchDB";
import ReactNativeWeb from "../components/ReactNativeWeb";

function Router() {
  return (
    <BrowserRouter>
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
            <PouchDBExample />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return <h2>Home Page</h2>;
}

export default Router;
