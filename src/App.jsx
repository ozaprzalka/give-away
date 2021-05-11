import React from "react";
import { Route, Switch } from "react-router-dom";
import { NavComponent } from "./components/home/Nav-component";
import { HeroComponent } from "./components/home/Hero-component";
import { LoginComponent } from "./components/login/Login-component";
import PrivateRoute from "./PrivateRoute";
import { Reset } from "styled-reset";
import { AuthProvider } from "./Auth";

function App() {
  return (
    <>
      <Reset />
      <AuthProvider>
        <NavComponent></NavComponent>
        <Switch>
          <Route component={HeroComponent} exact path="/"></Route>
          <Route component={LoginComponent} path="/login"></Route>
          <Route path="/register"></Route>
          <Route path="/idea"></Route>
          <Route path="/about"></Route>
          <Route path="/organizations"></Route>
          <Route path="/contact"></Route>
          <PrivateRoute path="/fund" exact />
          <PrivateRoute path="/giveaway" exact />
          {/* <Route path="*" component={NotFound} /> */}
        </Switch>
      </AuthProvider>
    </>
  );
}

export default App;
