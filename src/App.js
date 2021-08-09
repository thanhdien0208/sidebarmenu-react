
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './pages/Products';
import Reports from './pages/Reports';
import Account from './pages/Account';
import Dashboard from './pages/Dashboard';
import SharedDirs from './pages/SharedDirs';
import MessengerCustomerChat from 'react-messenger-customer-chat';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/products' exact component={Products} />
          <Route path='/reports' exact component={Reports} />
          <Route path='/shareddirs' exact component={SharedDirs} />
          <Route path='/account' exact component={Account} />
        </Switch>
      </Router>
      <MessengerCustomerChat
      pageId="106123264188732"
      appId="2417809361802564"
      />
    </>
  );
}

export default App;
