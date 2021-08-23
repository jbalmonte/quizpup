import { Home, Quizzes, Leaderboards, Login, Register } from './pages';
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// eslint-disable-next-line
import PrivateRoute from './components/PrivateRoute'
import PrivateRouteForms from './components/UserPrivateRoute';
import UserContextProvider from './context/UserContext';
import React from 'react';

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <PrivateRoute path="/quizzes" exact component={Quizzes} />
          <PrivateRoute path="/leaderboards" exact component={Leaderboards} />
          <PrivateRouteForms path="/login" exact component={Login} />
          <PrivateRouteForms path="/register" exact component={Register} />
        </Switch>

      </Router>
    </UserContextProvider>
  );
}

export default App;
