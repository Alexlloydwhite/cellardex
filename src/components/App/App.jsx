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
import Profile from '../Profile/_Profile';
import LandingPage from '../WelcomeScreen/LandingPage';
import Search from '../Search/_Search';
import PairingDescription from '../PairingDescription/_PairingDescription';
import CreateInsight from '../CreateInsight/CreateInsight';
import EditInsight from '../EditInsight/_EditInsight';
import LandingNav from '../NavBar/LandingNax';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

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
    <CssBaseline>
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
                  <Profile />
                </Nav>
              </ProtectedRoute>

              <ProtectedRoute
                exact
                path="/search"
              >
                <Nav>
                  <Search />
                </Nav>
              </ProtectedRoute>

              <ProtectedRoute
                exact
                path="/pairing/:id"
              >
                <Nav>
                  <PairingDescription />
                </Nav>
              </ProtectedRoute>

              <ProtectedRoute
                exact
                path="/insights/create/:id"
              >
                <Nav>
                  <CreateInsight />
                </Nav>
              </ProtectedRoute>

              <ProtectedRoute
                exact
                path="/insights/edit/:id"
              >
                <Nav>
                  <EditInsight />
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
                <LandingNav>
                  <LandingPage />
                </LandingNav>
              </ProtectedRoute>

              {/* If none of the other routes matched, we will show a 404. */}
              <Route>
                <h1>404</h1>
              </Route>
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;
