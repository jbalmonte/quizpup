import { Home, Quizzes, Leaderboards, Login, Register, CreateQuiz, Quiz } from './pages';
import Nav from './components/Nav'
import { Route, Switch } from 'react-router-dom'
// eslint-disable-next-line
import UserPrivateRoute from './components/UserPrivateRoute';
import UserContextProvider from './context/UserContext';
import React from 'react';
function App() {
  return (
    <UserContextProvider>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/quizzes/:id" render={
          props => {
            if (!isNaN(+props.match.params.id)) return <Quiz {...props} />
            else if (["all", "hot", "new", "best"].includes(props.match.params.id)) return <Quizzes {...props} />
            else return "404 NOT FOUND"
          }} />
        <Route path="/quizzes" component={Quizzes} />
        <Route path="/createQuiz" exact component={CreateQuiz} />
        <Route path="/leaderboards" exact component={Leaderboards} />
        <UserPrivateRoute path="/login" exact component={Login} />
        <UserPrivateRoute path="/register" exact component={Register} />
      </Switch>
    </UserContextProvider>
  );
}

export default App;
