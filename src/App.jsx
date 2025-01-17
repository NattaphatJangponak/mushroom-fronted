import React from 'react';
import { useLocation } from 'react-router-dom';
import AppRouter from '../src/routes/AppRouter';
import Navbar from './components/Navbar';

function App() {
  const location = useLocation();
  const hideNavbarPaths = ['/', '/login', '/register'];

  return (
    <div>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />} 
      <AppRouter />
    </div>
  );
}

export default App;
