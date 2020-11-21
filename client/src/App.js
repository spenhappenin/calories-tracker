import React, { lazy, Suspense, useContext, } from 'react';

import { Route, Switch, } from 'react-router-dom';
import { Container, } from 'semantic-ui-react';
import { AuthContext, } from './providers/AuthProvider';

const AuthRoute = lazy(() => import('./components/AuthRoute'));
const Dashboard = lazy(() => import('./components/Dashboard'));
const FetchUser = lazy(() => import('./components/FetchUser'));
const Items = lazy(() => import('./components/Items'));
const Item = lazy(() => import('./components/Item'));
const ItemForm = lazy(() => import('./components/ItemForm'));
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
          <Container>
            <FetchUser>
              <Switch>
                <ProtectedRoute
                  exact
                  path="/"
                  component={Dashboard}
                />
                <ProtectedRoute
                  exact
                  path="/items"
                  component={Items}
                />
                <ProtectedRoute
                  exact
                  path="/items/new"
                  component={ItemForm}
                />
                <ProtectedRoute
                  exact
                  path="/items/:id"
                  component={Item}
                />
                <ProtectedRoute
                  exact
                  path="/items/:id/edit"
                  component={ItemForm}
                />
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
          </Container>
          <br />
          <br />
          <br />
      </Suspense>
    </>
  );
};

export default App;
