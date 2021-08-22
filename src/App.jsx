import { Home, Quizzes, Leaderboards } from './pages';
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// eslint-disable-next-line
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/quizzes" exact component={Quizzes} />
        <Route path="/leaderboards" exact component={Leaderboards} />
      </Switch>

    </Router>
  );
}

export default App;
