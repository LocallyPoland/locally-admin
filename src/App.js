import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Notifications } from "react-push-notification";
import Layout from "./pages/Layout/Layout";
import ActiveOrdersPage from "./pages/ActiveOrdersPage/ActiveOrdersPage";
import EndedOrdersPage from "./pages/EndedOrdersPage/EndedOrdersPage";
import Login from "./pages/Login/Login";

function App() {
    return (
        <BrowserRouter history={{}}>
            <Notifications />
            <Switch>
                <Route path="/" component={Layout} exact />
                <Route path="/active-orders" component={ActiveOrdersPage} />
                <Route path="/ended-orders" component={EndedOrdersPage} />
                <Route path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
