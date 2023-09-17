import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Home
      </NavLink>
      <NavLink
        to="/catalog"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Catalog
      </NavLink>
      <NavLink
        to="/favorites"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Favorites
      </NavLink>
    </nav>
  );
};
