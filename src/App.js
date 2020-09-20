import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


// Mis paginas
import LoginPage from './pages/login/login';
import Home from './pages/dashboard/dashboard';

function App() {
  return (
   <Router>
     {/* <div>
     <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
     </div> */}
     <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/users">
            <div>
              Users
            </div>
          </Route>
          <Route path="/dashboard">
            <Home />
          </Route>
        </Switch>
   </Router>
  );
}

export default App;
