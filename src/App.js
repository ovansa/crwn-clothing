import HomePage from './pages/homepage/homepage.component';
import './App.css';
import { Route, Switch } from 'react-router';
import ShopPage from './pages/homepage/shop/shop.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact component={HomePage} path='/' />
        <Route component={ShopPage} path='/shop' />
      </Switch>
    </div>
  );
}

export default App;
