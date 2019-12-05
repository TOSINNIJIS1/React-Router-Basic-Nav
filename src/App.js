import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => (
  <Router>
  <div>
    <Navigation />
  </div>
  </Router>
);

export default App;
