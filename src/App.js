import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Dashboard}></Route>
        <Route path="/project/:id" component={ProjectDetails}></Route>
        <Route path="/signin" component={SignIn}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/create" component={CreateProject}></Route>
      </Switch>
    </div>
  );
}

export default App;
