import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './app/Components/ProtectedRoute/ProtectedRoute';
import Login from './features/login/Login';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/about'>
            <div> Essa0</div>
          </Route>
          <ProtectedRoute path='/users'>
            <div> Essa1</div>
          </ProtectedRoute>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <div>Placeholder</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
