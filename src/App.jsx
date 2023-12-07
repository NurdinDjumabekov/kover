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
import { useDispatch, useSelector } from 'react-redux';
import OrderListPage from './pages/OrderListPage/OrderListPage';
import {
  getAllDataFood,
  getDiscounts,
  getExample,
} from './store/reducers/requestFoodSlice';
import Preloader from './components/Preloader/Preloader';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDataFood('http://kover-site.333.kg/get_establishments/'));
    dispatch(
      getDiscounts('http://kover-site.333.kg/get_discount?code_category=1')
    );
    dispatch(getExample());
  }, []);

  const { loading } = useSelector((state) => state.requestFoodSlice);

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
          <Route path="/detailed/:id/:estab" element={<DetailedPage />} />
          <Route
            path="/product/:id/:name/:estab/:categ"
            element={<ProductPage />}
          />
          <Route path="/account" element={<Account />} />
          <Route path="/delivery" element={<DeliveryPage />} />
          <Route path="/listorder" element={<OrderListPage />} />
        </Route>
      </Routes>
      {loading && <Preloader />}
    </>
  );
};

export default App;
