import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import './App.css';

import Home from '../home/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
