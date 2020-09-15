import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { Notifications } from "react-push-notification";
import Layout from "./pages/Layout/Layout";
import ActiveOrdersPage from "./pages/ActiveOrdersPage/ActiveOrdersPage";
import EndedOrdersPage from "./pages/EndedOrdersPage/EndedOrdersPage";
import Login from "./pages/Login/Login";
import PublicOffer from "./pages/PublicOffer/PublicOffer";

function App() {
  return (
    <BrowserRouter history={{}} initialRouteName={Login}>
      <Notifications />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Layout} exact />
        <Route path="/active-orders" component={ActiveOrdersPage} />
        <Route path="/ended-orders" component={EndedOrdersPage} />
        <Route path="/public-offer" component={PublicOffer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
