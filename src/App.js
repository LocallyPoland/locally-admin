import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { Notifications } from "react-push-notification";
import Layout from "./pages/Layout/Layout";
import ActiveOrdersPage from "./pages/ActiveOrdersPage/ActiveOrdersPage";
import EndedOrdersPage from "./pages/EndedOrdersPage/EndedOrdersPage";
import Login from "./pages/Login/Login";
import { getAdminToken } from "./utils/utils";
import { connect } from "react-redux";

function App() {
  // const PrivateRoute = ({
  //   redirectTo,
  //   component: Component,
  //   condition,
  //   state = {},
  //   ...rest
  // }) => (
  //   <Route {...rest}>
  //     {condition ? (
  //       <Component />
  //     ) : (
  //       <Redirect to={{ pathname: redirectTo, state }} />
  //     )}
  //   </Route>
  // );
  // const aToken = getAdminToken();
  return (
    <BrowserRouter history={{}}>
      <Notifications />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route
          path="/home"
          component={Layout}
          exact
          // condition={!aToken}
          // redirectTo="/"
        />
        <Route
          path="/active-orders"
          component={ActiveOrdersPage}
          // condition={!aToken}
          // redirectTo="/"
        />
        <Route
          path="/ended-orders"
          component={EndedOrdersPage}
          // condition={!aToken}
          // redirectTo="/"
        />
      </Switch>
    </BrowserRouter>
  );
}
// const mapStateToProps = (state) => {
//   return {
//     admin: state.user,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getAdmin: (id, redirect) => dispatch(getUserByIdAction(id, redirect)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
