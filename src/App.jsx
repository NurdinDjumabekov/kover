import React, { useEffect } from 'react';
import './App.scss';
import { Route, Routes, useNavigate } from 'react-router-dom';
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
import Alerts from './components/Alerts/Alerts';

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { activeTypeEstab } = useSelector((state) => state.statesSlice);
  const { tokenNum, tokenName } = useSelector((state) => state.accountSlice);

  useEffect(() => {
    // if (activeTypeEstab === 0) {
    //   dispatch(
    //     getAllDataFood(
    //       'http://kover-site.333.kg/get_establishments?category_code=15'
    //     )
    //   );
    // }
    if (activeTypeEstab === 0) {
      dispatch(getAllDataFood('http://kover-site.333.kg/get_establishments/'));
    }
    dispatch(
      getDiscounts('http://kover-site.333.kg/get_discount?code_category=1')
    );
    dispatch(getExample());
  }, []);

  const { loading } = useSelector((state) => state.requestFoodSlice);
  const { loadingList } = useSelector((state) => state.ordersListSlice);
  const { loadingEdit } = useSelector((state) => state.EditDataUser);
  // console.log(loading, 'loading');
  // console.log(loadingList, 'loadingList');

  const { pathSite } = useSelector((state) => state.ordersListSlice);

  React.useEffect(() => {
    pathSite ? navigate('/main') : '';
  }, [pathSite]);
  ///// Для переходя со страниц заказов в main

  return (
    <>
      <Routes>
        <>
          {!!tokenNum && !!tokenName ? (
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
          ) : (
            <>
              <Route path="/" element={<MainInfo />} />
              <Route path="/login" element={<Login />} />
              <Route path="/welcome" element={<WelcomePage />} />
            </>
          )}
        </>
      </Routes>
      {loading && <Preloader />}
      {loadingList && <Preloader />}
      {loadingEdit && <Preloader />}
      <Alerts />
    </>
  );
};

export default App;
