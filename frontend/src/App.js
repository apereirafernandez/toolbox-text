import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateText from "./components/create-text.component";
import List from "./components/list.component";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand">Send and read Text</a>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to={"/create-text"}>
                    Create Text
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/list"}>
                    Text List
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Switch>
                <Route exact path="/" component={CreateText} />
                <Route path="/create-text" component={CreateText} />
                <Route path="/list" component={List} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
