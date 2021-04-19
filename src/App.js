import "./App.css";
import React, { Component } from "react";
import Container from "./components/container/Container";
import Footer from "./components/footer/Footer";
import Header from "./components/headers/Header";
import Menu from "./components/Menu";
import Home from "./components/home";
import Login from "./components/headers/Login";
import Register from "./components/headers/Register";
import Search from "./components/headers/Search";
import Promotion from "./components/Promotion";
import News from "./components/News";
import Service from "./components/Service";
import Feedback from "./components/Feedback";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/promotion">
            <Promotion />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/feedback">
            <Feedback />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
