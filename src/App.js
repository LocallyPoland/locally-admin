import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { Notifications } from "react-push-notification";
import Layout from "./pages/Layout/Layout";
import ActiveOrdersPage from "./pages/ActiveOrdersPage/ActiveOrdersPage";
import EndedOrdersPage from "./pages/EndedOrdersPage/EndedOrdersPage";
import Login from "./pages/Login/Login";
import { getAdminToken } from "./utils/utils";
import { connect } from "react-redux";

function App({email}) {
  const PrivateRoute = ({
    redirectTo,
    component: Component,
    condition,
    state = {},
    ...rest
  }) => (
    <Route {...rest}>
      {condition ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: redirectTo, state }} />
      )}
    </Route>
  );
  return (
    <BrowserRouter history={{}}>
      <Notifications />
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute
          path="/home"
          component={Layout}
          exact
          condition={localStorage.getItem('isAdmin') || email}
          redirectTo="/"
        />
        <PrivateRoute
          path="/active-orders"
          component={ActiveOrdersPage}
          condition={localStorage.getItem('isAdmin') || email}
          redirectTo="/"
        />
        <PrivateRoute
          path="/ended-orders"
          component={EndedOrdersPage}
          condition={localStorage.getItem('isAdmin') || email}
          redirectTo="/"
        />
      </Switch>
    </BrowserRouter>
  );
}
const mapStateToProps = (state) => {
  return {
      email: state.admin.email,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getAdmin: (id, redirect) => dispatch(getUserByIdAction(id, redirect)),
//   };
// };

export default connect(mapStateToProps, {})(App);
// export default App;
