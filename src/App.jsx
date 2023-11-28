import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainInfo from './pages/MainInfo/MainInfo';
import Login from './pages/Login/Login';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import MainPage from './pages/MainPage/MainPage';
import Layout from './components/hoc/Layout/Layout';
import SearchPage from './pages/SearchPage/SearchPage';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';
import OrdersPage from './pages/OrdersPage/OrdersPage';
import Account from './pages/Account/Account';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainInfo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/" element={<Layout />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/account" element={<Account />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
