// MUI
import { 
  createMuiTheme, 
  ThemeProvider,
  CssBaseline
} from '@material-ui/core';
// React
import { useEffect } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
// Components
import Nav from '../NavBar/Nav';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Profile from '../Profile/_Profile';
import LandingPage from '../WelcomeScreen/LandingPage';
import Search from '../Search/_Search';
import PairingDescription from '../PairingDescription/_PairingDescription';
import CreateInsight from '../CreateInsight/CreateInsight';
import EditInsight from '../EditInsight/_EditInsight';
import './App.css';
import LogIn from '../WelcomeScreen/LogIn';
import SignUp from '../WelcomeScreen/SignUp';
import About from '../AboutPage/AboutPage';
// App color theme
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
  // App fetches user anytime there is a dispatch.
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
                <LandingPage />
              </ProtectedRoute>

              <ProtectedRoute
                exact
                path="/signin"
                authRedirect="/search"
              >
                <LogIn />
              </ProtectedRoute>

              <ProtectedRoute
                exact
                path="/signup"
                authRedirect="/search"
              >
                <SignUp />
              </ProtectedRoute>

              <Route
                exact
                path='/about'
              >
                <About />
              </Route>

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
