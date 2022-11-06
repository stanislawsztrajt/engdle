import React, { FC } from 'react';
import 'assets/styles/global.css'
import Login from './pages/auth/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './pages/auth/register';
import Index from './pages/index';

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path=''>
          <Route index element={<Index />}></Route>
        </Route>
        
        <Route path='auth'>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
