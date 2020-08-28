import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import ActiveOrdersPage from "./pages/ActiveOrdersPage/ActiveOrdersPage";
import EndedOrdersPage from "./pages/EndedOrdersPage/EndedOrdersPage";

function App() {
    return (
        <BrowserRouter history={{}}>
            <Switch>
                <Route path="/" component={Layout} exact />
                <Route path="/active-orders" component={ActiveOrdersPage} />
                <Route path="/ended-orders" component={EndedOrdersPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
