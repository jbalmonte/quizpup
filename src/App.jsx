import { Home, Quizzes, Leaderboards } from './pages';
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <PrivateRoute path="/quizzes" exact component={Quizzes} />
        <PrivateRoute path="/leaderboards" exact component={Leaderboards} />
      </Switch>

    </Router>
  );
}

export default App;
