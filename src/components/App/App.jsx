import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Nav from '../NavBar/Nav';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserProfile/UserPage';
import LandingPage from '../WelcomeScreen/LandingPage';
import SearchView from '../SearchView/SearchView';
import PairingDescriptionView from '../PairingDescription/PairingDescription';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#344959'
    },
    secondary: {
      main: '#b85556'
    },
    textSecondary: {
      main: '#FFFFFF'
    }
  }
})

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />

            <ProtectedRoute
              exact
              path="/profile"
            >
              <Nav>
                <UserPage />
              </Nav>
            </ProtectedRoute>
            
            <ProtectedRoute
              exact
              path="/search"
            >
              <Nav>
                <SearchView />
              </Nav>
            </ProtectedRoute>

            <ProtectedRoute
              exact
              path="/pairing/:id"
            >
              <Nav>
                <PairingDescriptionView />
              </Nav>
            </ProtectedRoute>

            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/search"
              // - else shows LandingPage at "/home"
              exact
              path="/home"
              authRedirect="/search"
            >
              <LandingPage />
            </ProtectedRoute>

            {/* If none of the other routes matched, we will show a 404. */}
            <Route>
              <h1>404</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
