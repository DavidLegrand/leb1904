import React, { Suspense, lazy } from "react";
import { Route, Switch } from 'react-router-dom'
import Loading from "components/shared/Loading"
import PrivateRoute from './PrivateRoute'

const Login = lazy(() => import("components/pages/Login"));
const Regsiter = lazy(() => import("components/pages/Regsiter"));
const Dashboard = lazy(() => import("components/pages/Dashboard"));
const NotFound = lazy(() => import("components/pages/NotFound"));

const Router = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Regsiter} />
        <PrivateRoute path="/" exact component={Dashboard} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Suspense>
  )
};

export default Router;
