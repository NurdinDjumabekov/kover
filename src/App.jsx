import React, { useEffect } from 'react';
import './App.scss';
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
import DetailedPage from './pages/DetailedPage/DetailedPage';
import ProductPage from './pages/ProductPage/ProductPage';
import DeliveryPage from './pages/DeliveryPage/DeliveryPage';
import { getGood } from './store/reducers/RequestFoodSlide';
import { useDispatch } from 'react-redux';
import OrderListPage from './pages/OrderListPage/OrderListPage';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getGood());
  }, []);
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
          <Route path="/detailed/:id" element={<DetailedPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/account" element={<Account />} />
          <Route path="/delivery" element={<DeliveryPage />} />
          <Route path="/listorder" element={<OrderListPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
