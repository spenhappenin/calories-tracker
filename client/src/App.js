import React, { lazy, Suspense, useContext, } from 'react';

import { Route, Switch, } from 'react-router-dom';
import { AuthContext, } from './providers/AuthProvider';

const AuthRoute = lazy(() => import('./components/AuthRoute'));
const FetchUser = lazy(() => import('./components/FetchUser'));
const Login = lazy(() => import('./components/Login'));
const Navbar = lazy(() => import('./components/Navbar'));
const NotFound = lazy(() => import('./components/NotFound'));
const Registration = lazy(() => import('./components/Registration'));
const ProtectedRoute = lazy(() => import('./components/ProtectedRoute'));

const App = () => {
  const { authenticated, } = useContext(AuthContext);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
          <FetchUser>
            <Switch>
              <AuthRoute
                exact
                path="/login"
                component={Login}
              />
              <AuthRoute
                exact
                path="/register"
                component={Registration}
              />
              <Route
                path="*"
                component={NotFound}
              />
            </Switch>
          </FetchUser>
          <br />
          <br />
          <br />
      </Suspense>
    </>
  );
}

export default App;
