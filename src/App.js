import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Dashboard}></Route>

      </Switch>
    </div>
  );
}

export default App;
