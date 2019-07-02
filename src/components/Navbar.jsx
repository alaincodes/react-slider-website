import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import "./Navbar.scss";
import App from "../pages/App";
import About from "../pages/About";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// class component
class Navbar extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav">
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </div>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={450} classNames="fade">
                <Switch location={location}>
                  <Route exact path="/" component={App} />
                  <Route path="/about" component={About} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    );
  }
}

export default Navbar;
