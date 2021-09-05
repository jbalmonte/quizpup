import { Home, Quizzes, Leaderboards, Login, Register, CreateQuiz, Quiz, TakeQuiz, Account, Settings, About, Contact } from './pages';
import Nav from './components/Nav'
import { Route, Switch } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext';
import React from 'react';
import PrivateRoute from './components/PrivateRoute';
import { PublicRoute } from './components/PublicRoute';

function App() {
  return (
    <AuthContextProvider>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <PrivateRoute path="/quizzes/:id(\d+)" component={Quiz} />
        <PrivateRoute path="/quizzes/:category(all|hot|new|best)" component={Quizzes} />
        <PrivateRoute path="/quizzes" component={Quizzes} />
        <PrivateRoute path="/createQuiz" exact component={CreateQuiz} />
        <PrivateRoute path="/takeQuiz/:id" exact component={TakeQuiz} />
        <PrivateRoute path="/leaderboards" exact component={Leaderboards} />
        <PrivateRoute path="/settings" exact component={Settings} />
        <PrivateRoute path="/account" exact component={Account} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <PublicRoute path="/login" exact component={Login} />
        <PublicRoute path="/register" exact component={Register} />
      </Switch>
    </AuthContextProvider>
  );
}

export default App;
