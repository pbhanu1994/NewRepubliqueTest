import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from './components/home';
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <main className="container-fluid">
        <NavBar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about-us" component={Home} />
          <Route path="/services" component={Home} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    );
  }
}

export default App;