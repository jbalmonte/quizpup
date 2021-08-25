import { Home, Quizzes, Leaderboards, Login, Register, CreateQuiz } from './pages';
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// eslint-disable-next-line
import PrivateRoute from './components/PrivateRoute'
import UserPrivateRoute from './components/UserPrivateRoute';
import UserContextProvider from './context/UserContext';
import React from 'react';

function App() {
  return (
    <UserContextProvider>
      <Router >
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/quizzes" exact component={Quizzes} />
          <Route path="/leaderboards" exact component={Leaderboards} />
          <UserPrivateRoute path="/login" exact component={Login} />
          <UserPrivateRoute path="/register" exact component={Register} />
          <Route path="/createQuiz" exact component={CreateQuiz} />
        </Switch>

      </Router>
    </UserContextProvider>
  );
}

export default App;
