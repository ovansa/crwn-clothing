import HomePage from './pages/homepage/homepage.component';
import './App.css';
import { Route, Switch } from 'react-router';

const HatsPage = () => (
  <div>
    <h1>Hat Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact component={HomePage} path='/' />
        <Route component={HatsPage} path='/shop/hats' />
      </Switch>
    </div>
  );
}

export default App;
