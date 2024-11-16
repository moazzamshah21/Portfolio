import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Tabs from './Navigation/Tabs'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Tabs/>
    </Router>
  );
}

export default App;
