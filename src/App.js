import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Tabs from './Navigation/Tabs';
import Loader from './Loader/Loader'; // Import the existing Loader component
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading period for assets/animations
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust duration as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {isLoading ? <Loader /> : <Tabs />}
    </Router>
  );
}

export default App;
