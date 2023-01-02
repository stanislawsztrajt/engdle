import React, { FC } from 'react';
import 'assets/styles/global.css';
import Login from './pages/auth/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/auth/register';
import Index from './pages/index';
import Texts from 'pages/features/texts';
import Dashboard from 'pages/dashboard';
import { Header } from 'features/ui';
import FlashCards from 'pages/features/flash-cards';
import Quotes from 'pages/features/quotes';
import Stories from 'pages/features/stories';

const App: FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Index />}></Route>

        <Route path="auth">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="dashboard">
          <Route index element={<Dashboard />}></Route>
        </Route>

        <Route path="features">
          <Route path="texts" element={<Texts />}></Route>
          <Route path="flash-cards" element={<FlashCards />}></Route>
          <Route path="quotes" element={<Quotes />}></Route>
          <Route path="stories" element={<Stories />}></Route>
          <Route path="notes" element={<Texts />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
