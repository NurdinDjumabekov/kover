import React from 'react';
import styles from './NavMenu.module.scss';
import { NavLink } from 'react-router-dom';
import main from '../../assets/icons/main.svg';
import search from '../../assets/icons/search.svg';
import categories from '../../assets/icons/categories.svg';
import order from '../../assets/icons/order.svg';
import account from '../../assets/icons/account.svg';

const NavMenu = () => {
  const [pages, setPages] = React.useState([
    {
      id: 1,
      title: 'main',
      link: '/main',
      bool: false,
      img: main,
    },
    {
      id: 2,
      title: 'search',
      link: '/search',
      bool: false,
      img: search,
    },
    {
      id: 3,
      title: 'categories',
      link: '/categories',
      bool: false,
      img: categories,
    },
    {
      id: 4,
      title: 'orders',
      link: '/orders',
      bool: false,
      img: order,
    },
    {
      id: 5,
      title: 'account',
      link: '/account',
      bool: false,
      img: account,
    },
  ]);

  React.useEffect(() => {
    const newPage = pages.map((i) => {
      if (i.link === location.pathname) {
        return {
          ...i,
          bool: true,
        };
      } else {
        return {
          ...i,
          bool: false,
        };
      }
    });
    setPages(newPage);
  }, [location.pathname]);

  return (
    <ul className={styles.menu}>
      {pages?.map((i) => (
        <li key={i.id}>
          <NavLink to={i.link}>
            <img src={i.img} alt={'page'} />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
